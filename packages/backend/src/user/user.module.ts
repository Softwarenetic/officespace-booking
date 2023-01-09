import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import UserService from './user.service';
import UserController from './user.controller';
import User from '../entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {
}
