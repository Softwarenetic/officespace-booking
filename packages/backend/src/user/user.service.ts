import { Injectable } from '@nestjs/common';
import { User } from '../entity/User';
import {AppDataSource} from "../config/typeorm.config";

@Injectable()
export class UserService {

  async update(id: number, user: User) {
    await AppDataSource.manager.update(User, user.id, user);
    return `Successfully updated a #${user.id} user`;
  }

  async remove(id: number) {
    await AppDataSource.manager.delete(User, {id:id});
    return `Successfully removed a #${id} user`;
  }
}
