import {Module} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {AppController} from './app.controller';
import {AppService} from './app.service';
<<<<<<< HEAD
import {GoogleStrategy} from "./strategy/google.strategy";
import {JwtStrategy} from "./common/strategy/jwt.strategy";
=======
import {GoogleStrategy} from "./common/strategy/google.strategy";
import {JwtStrategy} from './common/strategy/jwt.strategy';

>>>>>>> origin/task/wbs-38-backend-frontend-authentification

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService,JwtService,GoogleStrategy,JwtStrategy],
})
export class AppModule {
}
