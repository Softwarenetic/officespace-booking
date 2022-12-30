import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import AppDataSource from './config/typeorm.config';
import 'reflect-metadata';

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.error('Error during Data Source initialization: ', error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  await app.listen(process.env.BACKEND_PORT);
}

bootstrap();
