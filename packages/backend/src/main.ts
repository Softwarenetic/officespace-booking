import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  await app.listen(process.env.BACKEND_PORT);
}

bootstrap();
