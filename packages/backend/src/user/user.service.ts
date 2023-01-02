import { Injectable } from '@nestjs/common';
import User from '../entity/User';
import AppDataSource from '../config/typeorm.config';

@Injectable()
export default class UserService {
  async update(id: number, user: User) {
    const { email, ...updatedUser } = user;
    await AppDataSource.manager.update(User, { id }, updatedUser);
    return `Successfully updated a #${id} user, email ${email}`;
  }

  async remove(id: number) {
    await AppDataSource.manager.delete(User, { id });
    return `Successfully removed a #${id} user`;
  }
}
