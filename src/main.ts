import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger';
import { createRequiredFolders } from './config/image/create-required-folders';
import { CustomExceptionFilter } from './shared/exceptions/custom-exception-filter.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new CustomExceptionFilter());

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  createRequiredFolders();

  await app.listen(process.env.PORT);
}

bootstrap();
