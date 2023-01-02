import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import AppController from './app.controller';
import AppService from './app.service';
import { JwtStrategy } from './common/strategy/jwt.strategy';
import UserModule from './user/user.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, JwtService, JwtStrategy],
})
export default class AppModule {
}
