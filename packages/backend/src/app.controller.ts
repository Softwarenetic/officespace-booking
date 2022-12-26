import {
    Controller,
    Get,
    Req,
    UseGuards,
} from '@nestjs/common';
import {AppService} from './app.service';
import {AuthGuard} from '@nestjs/passport';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @UseGuards(AuthGuard("jwt"))
    @Get('hello')
    async hello(@Req() req) {
        return req.user;
    }

    @UseGuards(AuthGuard("google"))
    @Get("login")
    async signInWithGoogle() {
    }

    @UseGuards(AuthGuard("google"))
    @Get("google/redirect")
    async signInWithGoogleRedirect(@Req() req) {
        return this.appService.signInWithGoogle(req);
    }

}
