import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive, Validate } from 'class-validator';
import { IsUrlAccessible } from 'src/shared/decorators/is_url_accessible.decorator';
import { IsCompress } from '../validator/compress.validator';

export class CreateImageDto {
  @ApiProperty({
    description: 'Link of the image',
    example:
      'https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg',
  })
  @IsString()
  // @Validate(IsUrlAccessible)
  @IsUrlAccessible()
  image: string;

  @IsPositive()
  @IsNumber()
  @Validate(IsCompress)
  @ApiProperty({
    description:
      'The compression ratio of the image must be greater than 0 and less than or equal to 1.',
    example: 15,
  })
  compress: number;
}
