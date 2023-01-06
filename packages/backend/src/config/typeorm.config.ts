import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import User from '../entity/User';
import Workplace from '../entity/Workplace';
import Office from '../entity/Office';
import Reservation from '../entity/Reservation';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: 5432,
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      synchronize: false,
      logging: true,
      entities: [User, Workplace, Office, Reservation],
      subscribers: [],
      migrationsRun: true,
      migrations: ['dist/migration/**/*.js'],
    }),
    inject: [ConfigService],
  })],
})

export default class TypeormConfig {
}
