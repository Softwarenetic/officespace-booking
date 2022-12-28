import { Injectable } from '@nestjs/common';
import { User } from '../entity/User';
import {AppDataSource} from "../config/typeorm.config";

@Injectable()
export class UserService {

  async update(user: User) {
    await AppDataSource.manager.update(User, user.id, user);
    return `Successfully updated a #${user.id} user`;
  }

  async remove(user: User) {
    await AppDataSource.manager.delete(User, {id:user.id});
    return `Successfully removed a #${user.id} user`;
  }
}
