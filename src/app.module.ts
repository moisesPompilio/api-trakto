import { Module } from '@nestjs/common';
import { ImageModule } from './modules/image/image.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${process.env.DB_CONECTOR}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT&authSource=admin`,
    ),
    ImageModule,
  ],
})
export class AppModule {}
