import { CustomException } from './custom.exception';
import { HttpStatus } from '@nestjs/common';

export class DeleteFileException extends CustomException {
  constructor(message: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR, 'EXCLUDE_FILE_EXCEPTION');
  }
}
