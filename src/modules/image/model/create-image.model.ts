import { ApiProperty } from '@nestjs/swagger';
import { IsCompress } from '../../../shared/decorators/Is-compress.decorator';
import { IsUrlWithCodeExcption } from '../../../shared/decorators/is-url.-with-code-exception.decorator';

export class CreateImage {
  @ApiProperty({
    description:
      'image link, which will be saved and have a compressed and resized copy',
    example:
      'https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg',
  })
  @IsUrlWithCodeExcption()
  image: string;

  @IsCompress()
  @ApiProperty({
    description:
      'Compress will be the compression factor of the image, this factor must be an integer between 1 and 100.',
    example: 15,
  })
  compress: number;
}
