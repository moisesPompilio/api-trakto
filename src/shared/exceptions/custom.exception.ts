import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, statusCode: HttpStatus, code: string) {
    super({ message, code }, statusCode);
  }
}
