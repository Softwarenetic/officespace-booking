import {
    Controller,
    Get,
    Req,
    UseGuards,
} from '@nestjs/common';
import {AppService} from './app.service';
import {AuthGuard} from '@nestjs/passport';
import { Request } from 'express';
import { JWT_STRATEGY } from './common/strategy/jwt.strategy';
import { GOOGLE_STRATEGY } from './common/strategy/google.strategy';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @UseGuards(AuthGuard(JWT_STRATEGY))
    @Get('hello')
    async hello(@Req() req: Request) {
        return req.user;
    }

    @UseGuards(AuthGuard(GOOGLE_STRATEGY))
    @Get("login")
    async signInWithGoogle() {
    }

    @UseGuards(AuthGuard(GOOGLE_STRATEGY))
    @Get("google/redirect")
    async signInWithGoogleRedirect(@Req() req: Request) {
        return this.appService.signInWithGoogle(req);
    }

}
