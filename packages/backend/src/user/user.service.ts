import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../entity/User';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {
  }

  async update(id: number, user: User) {
    const { email, ...updatedUser } = user;
    await this.repository.update({ id }, updatedUser);
    return `Successfully updated a #${id} user, email ${email}`;
  }

  async remove(id: number) {
    await this.repository.delete({ id });
    return `Successfully removed a #${id} user`;
  }
}
