import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config/swagger';
import { createRequiredFolders } from './config/image/create-required-folders';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  createRequiredFolders();

  await app.listen(process.env.PORT);
}

bootstrap();
