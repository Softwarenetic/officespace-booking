import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    UseGuards,
} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {OAuth2Client} from 'google-auth-library';
import {JWT_STRATEGY} from './common/strategy/jwt.strategy';
import AppService from './app.service';

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
);

@Controller()
export default class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @UseGuards(AuthGuard(JWT_STRATEGY))
    @Get('hello')
    async hello() {
        return 'Hi there';
    }

    @Post('login')
    async login(@Body('token') token) {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        if (!ticket) {
            throw new BadRequestException();
        }
        const payload = ticket.getPayload();
        const data = await this.appService.signInWithGoogle(payload);
        return {
            data,
            message: 'success',
        };
    }
}
