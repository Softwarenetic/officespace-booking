import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OAuth2Client } from 'google-auth-library';
import { ConfigService } from '@nestjs/config';
import { JWT_STRATEGY } from './common/strategy/jwt.strategy';
import AppService from './app.service';

@Controller()
export default class AppController {
  private client: OAuth2Client;

  constructor(private readonly appService: AppService, private configService: ConfigService) {
    this.client = new OAuth2Client(
      this.configService.get('GOOGLE_CLIENT_ID'),
      this.configService.get('GOOGLE_CLIENT_SECRET'),
    );
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
    const ticket = await (async () => {
      try {
        return await this.client.verifyIdToken({
          idToken: token,
          audience: this.configService.get('GOOGLE_CLIENT_ID'),
        });
        /* eslint-disable-next-line */
            } catch (e) {
        throw new BadRequestException('invalid token signature');
      }
    })();
    if (!ticket) {
      throw new BadRequestException('user not exists');
    }
    const payload = ticket.getPayload();
    const data = await this.appService.signInWithGoogle(payload);
    return {
      data,
      message: 'success',
    };
  }
}
