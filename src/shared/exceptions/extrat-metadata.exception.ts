import { CustomException } from './custom.exception';
import { HttpStatus } from '@nestjs/common';

export class ExtractMetadataException extends CustomException {
  constructor(message: string) {
    super(
      message,
      HttpStatus.INTERNAL_SERVER_ERROR,
      'EXTRAC_METADATA_EXCEPTION',
    );
  }
}
