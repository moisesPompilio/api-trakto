import { CustomException } from './custom.exception';
import { HttpStatus } from '@nestjs/common';

export class CompressAndResizeImageException extends CustomException {
  constructor(message: string) {
    super(
      message,
      HttpStatus.INTERNAL_SERVER_ERROR,
      'COMPRESS_AND_RESIZE_IMAGE',
    );
  }
}
