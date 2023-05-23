import { ApiProperty } from '@nestjs/swagger';
import { IsUrlWithCodeExcption } from 'src/shared/decorators/is-url.-with-code-exception.decorator';
import { IsCompress } from '../../../shared/decorators/Is-compress.decorator';

export class CreateImage {
  @ApiProperty({
    description: 'Link of the image',
    example:
      'https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg',
  })
  @IsUrlWithCodeExcption()
  image: string;

  @IsCompress()
  @ApiProperty({
    description:
      'The compression ratio of the image must be greater than 1 and less than or equal to 99.',
    example: 15,
  })
  compress: number;
}
