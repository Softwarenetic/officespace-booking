import {Module} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {JwtStrategy} from "./common/strategy/jwt.strategy";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService,JwtService, JwtStrategy],
})
export class AppModule {
}
