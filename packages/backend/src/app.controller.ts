import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';
import {AppService} from './app.service';
import {AuthGuard} from '@nestjs/passport';
import { Request } from 'express';
import { JWT_STRATEGY } from './common/strategy/jwt.strategy';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
   );

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

    @Post("login")
    async login(@Body('token') token) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
          });
          console.log(ticket.getPayload(), 'ticket');

          const data = await this.appService.signInWithGoogle(ticket.getPayload());
          return {
            data,
            message: 'success',
          };
    }

}
