import {Module} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {JwtStrategy} from "./common/strategy/jwt.strategy";
import { UserModule } from './user/user.module';

@Module({
    imports: [UserModule],
    controllers: [AppController],
    providers: [AppService,JwtService, JwtStrategy],
})
export class AppModule {
}
