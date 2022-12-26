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

<<<<<<< HEAD
    @UseGuards(AuthGuard(process.env.JWT_STRATEGY))
=======
    @UseGuards(AuthGuard(JWT_STRATEGY))
>>>>>>> origin/task/wbs-38-backend-frontend-authentification
    @Get('hello')
    async hello(@Req() req: Request) {
        return req.user;
    }

<<<<<<< HEAD
    @UseGuards(AuthGuard(process.env.GOOGLE_STRATEGY))
=======
    @UseGuards(AuthGuard(GOOGLE_STRATEGY))
>>>>>>> origin/task/wbs-38-backend-frontend-authentification
    @Get("login")
    async signInWithGoogle() {
    }

<<<<<<< HEAD
    @UseGuards(AuthGuard(process.env.GOOGLE_STRATEGY))
=======
    @UseGuards(AuthGuard(GOOGLE_STRATEGY))
>>>>>>> origin/task/wbs-38-backend-frontend-authentification
    @Get("google/redirect")
    async signInWithGoogleRedirect(@Req() req: Request) {
        return this.appService.signInWithGoogle(req);
    }

}
