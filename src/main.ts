import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  swaggerSetup(app);
  setPrismaClientExceptionFilter(app);
  await app.listen(3000);
}

function swaggerSetup(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Hoge')
    .setDescription('The Hoge API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

function setPrismaClientExceptionFilter(app: INestApplication) {
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
}

bootstrap();
