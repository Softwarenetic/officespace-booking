import {Injectable} from '@nestjs/common';
import {User} from '../entity/User';
import {AppDataSource} from "../config/typeorm.config";

@Injectable()
export class UserService {

    async update(id: number, user: User) {
        delete user.id;
        delete user.email;
        const existing = await AppDataSource.manager.findOne(User, {
            where: {id}
        });

        const updated = await AppDataSource.manager.save(User, {
            ...existing,
            ...user
        });
        console.log(updated);

        return `Successfully updated a #${id} user`;
    }

    async remove(id: number) {
        await AppDataSource.manager.delete(User, {id: id});
        return `Successfully removed a #${id} user`;
    }
}
