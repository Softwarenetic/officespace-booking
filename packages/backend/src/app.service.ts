import {
  BadRequestException, CACHE_MANAGER, Inject, Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from 'google-auth-library';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import User from './entity/User';

@Injectable()
export default class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(
    @InjectDataSource() private dataSource: DataSource,
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.cacheManager.set('allowedEmails', ['softwarenetic.com']);
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

    if (!(await this.cacheManager.get<Array<string>>('allowedEmails')).includes(data.email.split('@')[1])) {
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
