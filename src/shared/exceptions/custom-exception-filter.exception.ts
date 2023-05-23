import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';

@Catch(HttpException)
export class CustomExceptionFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();

    let errors: { code: string; message: string }[] = [];

    if (typeof exception.getResponse() === 'string') {
      // Caso seja uma string, tratar como uma única mensagem de erro
      errors.push({ code: 'EXCEPTION', message: `${exception.getResponse()}` });
    } else {
      const originalError = exception.getResponse() as { message: string[] };
      const codeResponse = exception.getResponse() as { code: string };
      if (codeResponse.code === undefined) {
        codeResponse.code = 'EXCEPTION';
      }

      if (originalError.message instanceof Array) {
        errors = originalError.message.map((message: string) => ({
          code: codeResponse.code,
          message,
        }));
      } else {
        errors.push({
          code: codeResponse.code,
          message: `${originalError.message}`,
        });
      }
    }

    const errorResponse = {
      errors,
    };

    response.status(status).json(errorResponse);
  }
}
