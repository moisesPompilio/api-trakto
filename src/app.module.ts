import { Module } from '@nestjs/common';
import { ImageModule } from './modules/image/image.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { APP_FILTER } from '@nestjs/core';
import { CustomExceptionFilter } from './shared/exceptions/custom-exception-filter.exception';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${process.env.DB_CONECTOR}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT&authSource=admin`,
    ),
    ImageModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
  ],
})
export class AppModule {}
