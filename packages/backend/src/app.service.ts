import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from 'google-auth-library';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import User from './entity/User';
import appCache from './config/node-cache.config';
import Settings from './entity/Settings';

@Injectable()
export default class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(
    @InjectDataSource() private dataSource: DataSource,
    private jwtService: JwtService,
  ) {
    (async () => {
      appCache.set('allowedDomains', (await this.dataSource.manager.findOneBy(Settings, { id: 1 })).domains);
    })();
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign(
        {
          id: user.id,
          email: user.email,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRE_TIME,
        },
      ),
    };
  }

  async signInWithGoogle(data: TokenPayload) {
    if (!data) {
      throw new BadRequestException();
    }
    const user = (await this.dataSource.manager.findOneBy(User, { email: data.email }));
    if (user) {
      return this.login(user);
    }

    const allowedDomains = appCache.get('allowedDomains') as string[];
    if (!(allowedDomains.includes(data.email.split('@')[1]))) {
      return {
        message: 'not allowed company',
      };
    }

    const companyNameFromEmailRegex = /@(.*?)\./;

    const newUser = new User();
    newUser.name = data.given_name;
    newUser.surname = data.family_name || '-';
    newUser.email = data.email;
    newUser.company = data.email.match(companyNameFromEmailRegex)[1] === 'gmail' ? '-' : data.email.match(companyNameFromEmailRegex)[1];
    newUser.position = '-';
    newUser.avatar = data.picture;

    await this.dataSource.manager.save(newUser);
    return this.login(newUser);
  }
}
