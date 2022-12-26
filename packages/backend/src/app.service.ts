import {BadRequestException, Injectable} from '@nestjs/common';
import {AppDataSource} from "./config/typeorm.config";
import {User} from "./entity/User";
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AppService {

    getHello(): string {
        return 'Hello World!';
    }

    constructor(
        private jwtService: JwtService
    ) {
    }

    async login(user: User) {
        return {
            access_token: this.jwtService.sign(
                {
                    id: user.id,
                    email: user.email,
                },
                {
                    secret: process.env.JWT_SECRET,
                    expiresIn: process.env.JWT_EXPIRE_TIME,
                }
            ),
        };
    }

    async signInWithGoogle(data) {
        if (!data.user) throw new BadRequestException();

        let user = (await AppDataSource.manager.findBy(User, {email: data.user.email}))[0];
        if (user) return this.login(user);

        try {
            const newUser = new User();
            newUser.name = data.user.firstName;
            newUser.surname = data.user.lastName || "-";
            newUser.email = data.user.email;
            newUser.id = data.user.id;
            newUser.company = '-';
            newUser.position = '-';
            newUser.avatar = data.user.picture;

            await AppDataSource.manager.save(newUser);
            return this.login(newUser);
        } catch (e) {
            throw new Error(e);
        }
    }

}
