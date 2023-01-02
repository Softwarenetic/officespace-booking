import {
    Controller, Get, Patch, Delete, UseGuards, Req, Body,
} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {Request} from 'express';
import UserService from './user.service';
import {JWT_STRATEGY} from '../common/strategy/jwt.strategy';
import User from '../entity/User';

@Controller('user')
export default class UserController {
    constructor(private readonly userService: UserService) {
    }

    @UseGuards(AuthGuard(JWT_STRATEGY))
    @Get()
    get(@Req() req: Request) {
        return req.user;
    }

    @UseGuards(AuthGuard(JWT_STRATEGY))
    @Patch()
    update(@Req() req: Request, @Body() user: User) {
        return this.userService.update((<User>req.user).id, user);
    }

    @UseGuards(AuthGuard(JWT_STRATEGY))
    @Delete()
    remove(@Req() req: Request) {
        return this.userService.remove((<User>req.user).id);
    }
}
