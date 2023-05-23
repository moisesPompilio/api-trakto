import { ApiProperty } from '@nestjs/swagger';

export class customTipeException {
  @ApiProperty({
    description: 'error array',
    example: [{ code: 'INVALID_INPUT', message: 'failed to save image' }],
  })
  error: error[];
}

class error {
  @ApiProperty({
    description: 'error identification code',
    example: 'INVALID_INPUT',
  })
  code: string;
  @ApiProperty({
    description: 'error message',
    example: 'failed to save image',
  })
  message: string;
}
