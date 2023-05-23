import { registerDecorator, ValidationOptions } from 'class-validator';
import { InvalidInputException } from '../exceptions/invalid-input.exception';

export function IsUrlWithCodeExcption(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsUrlWithCodeExcption',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
          if (typeof value !== 'string' || !urlRegex.test(value)) {
            throw new InvalidInputException(`That link ${value} is invalid`);
          }
          return true;
        },
      },
    });
  };
}
