import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import User from '../../entity/User';
import AppDataSource from '../../config/typeorm.config';

export const JWT_STRATEGY = 'jwt';

export type JwtPayload = {
  id: string;
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY) {
  constructor() {
    const extractJwtFromCookie = (req) => ExtractJwt.fromAuthHeaderAsBearerToken()(req);

    super({
      ignoreExpiration: false,
      jwtFromRequest: extractJwtFromCookie,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await AppDataSource.manager.findOneBy(User, { email: payload.email });

    if (!user) throw new UnauthorizedException('Please log in to continue');

    return user;
  }
}
