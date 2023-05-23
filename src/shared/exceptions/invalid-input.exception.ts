import { CustomException } from './custom.exception';
import { HttpStatus } from '@nestjs/common';

export class InvalidInputException extends CustomException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST, 'INVALID_INPUT');
  }
}
