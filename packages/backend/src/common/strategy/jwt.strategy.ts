import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import User from '../../entity/User';

export const JWT_STRATEGY = 'jwt';

export type JwtPayload = {
  id: string;
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY) {
  constructor(@InjectDataSource()
  private dataSource: DataSource) {
    const extractJwtFromCookie = (req) => ExtractJwt.fromAuthHeaderAsBearerToken()(req);

    super({
      ignoreExpiration: false,
      jwtFromRequest: extractJwtFromCookie,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.dataSource.manager.findOneBy(User, { email: payload.email });

    if (!user) {
      throw new UnauthorizedException('Please log in to continue');
    }

    return user;
  }
}
