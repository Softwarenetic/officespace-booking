import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {AppDataSource} from './data-source';
import "reflect-metadata"

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((error) =>
        console.error('Error during Data Source initialization: ', error),
    );

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(4000);
}

bootstrap();
