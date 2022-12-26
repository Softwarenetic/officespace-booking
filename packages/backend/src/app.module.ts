import {Module} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GoogleStrategy} from "./google.strategy";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService,JwtService,GoogleStrategy,JwtStrategy],
})
export class AppModule {
}
