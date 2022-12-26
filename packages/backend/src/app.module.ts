import {Module} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GoogleStrategy} from "./strategy/google.strategy";
import {JwtStrategy} from "./strategy/jwt.strategy";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService,JwtService,GoogleStrategy,JwtStrategy],
})
export class AppModule {
}
