import {
  Controller, Get, Patch, Delete, UseGuards, Req, Body, Post, UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import UserService from './user.service';
import { JWT_STRATEGY } from '../common/strategy/jwt.strategy';
import User from '../entity/User';

@Controller('user')
@ApiTags('user')
export default class UserController {
  constructor(private readonly userService: UserService) {
  }

  @UseGuards(AuthGuard(JWT_STRATEGY))
  @Get()
  get(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(AuthGuard(JWT_STRATEGY))
  @Post('avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    return this.userService.uploadFile(file.buffer, `${Math.random() * Date.now()}.${file.mimetype.split('/').at(-1)}`, (req.user as User).id);
  }

  @UseGuards(AuthGuard(JWT_STRATEGY))
  @Patch()
  update(@Req() req: Request, @Body() user: User) {
    return this.userService.update((req.user as User).id, user);
  }

  @UseGuards(AuthGuard(JWT_STRATEGY))
  @Delete()
  remove(@Req() req: Request) {
    return this.userService.remove((req.user as User).id);
  }
}
