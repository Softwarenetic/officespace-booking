import {NestFactory} from '@nestjs/core';
import AppModule from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import AppDataSource from './config/typeorm.config';
import 'reflect-metadata';

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((error) => console.error('Error during Data Source initialization: ', error));

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({origin: '*'});

    const config = new DocumentBuilder()
        .setTitle('Office place booking')
        .setDescription('Office place booking service API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.BACKEND_PORT);
}

bootstrap();
