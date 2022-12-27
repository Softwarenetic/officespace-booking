import {Module} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GoogleStrategy} from "./common/strategy/google.strategy";
import {JwtStrategy} from "./common/strategy/jwt.strategy";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService,JwtService,GoogleStrategy,JwtStrategy],
})
export class AppModule {
}
