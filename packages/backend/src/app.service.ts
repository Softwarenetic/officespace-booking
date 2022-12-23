import {Injectable} from '@nestjs/common';
import {User} from './entity/User';
import {AppDataSource} from "./data-source";

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    async login({
                    email,
                    name,
                    image,
                }: {
        email: string;
        name: string;
        image: string;
    }): Promise<any> {
        const user = await AppDataSource.manager.findOneBy(User, {email: email});
        if (!user) {
            const newUser = new User();
            newUser.email = email;
            newUser.name = name;
            newUser.avatar = image;
            //await AppDataSource.manager.save(newUser);
            return newUser;
        } else {
            console.log(user);
            return user;
        }
    }
}
