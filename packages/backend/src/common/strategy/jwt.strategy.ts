import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import { Request } from 'express';
import { AppDataSource } from 'src/config/typeorm.config';
import User from 'src/entity/User';

export const JWT_STRATEGY = "gwt";

export type JwtPayload = {
    id: string;
    email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY) {
    constructor() {
        const extractJwtFromCookie = (req: Request) => ExtractJwt.fromAuthHeaderAsBearerToken()(req);

        super({
            ignoreExpiration: false,
            jwtFromRequest: extractJwtFromCookie,
            secretOrKey: process.env.JWT_SECRET
        });
    }

    async validate(payload: JwtPayload) {
        const user = await AppDataSource.manager.findOneBy(User, {email: payload.email});

        if (!user) throw new UnauthorizedException('Please log in to continue');

        return user;
    }
}
