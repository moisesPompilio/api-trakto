import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import sharp from 'sharp';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop({ type: Object })
  @ApiProperty({
    description: 'Local Path das images',
    example: { original: '/path/to/original.jpg', thumb: '/path/to/thumb.jpg' },
  })
  localpath: {
    original: string;
    thumb: string;
  };
  @Prop({ type: Object })
  @ApiProperty({
    description: 'Metadatas da imagem original',
    example: {
      format: 'jpeg',
      width: 1280,
      height: 720,
      space: 'srgb',
      channels: 3,
      density: 300,
      orientation: 1,
      hasAlpha: false,
      ALL_EXIF_DATA_KEY: 'ALL_EXIF_DATA_VALUE',
    },
  })
  metadata: sharp.Metadata;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
