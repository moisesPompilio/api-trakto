import { CustomException } from './custom.exception';
import { HttpStatus } from '@nestjs/common';

export class DowloadException extends CustomException {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR, 'DOWLOAD_FAILED');
  }
}
