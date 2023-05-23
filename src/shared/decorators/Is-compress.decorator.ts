import { registerDecorator, ValidationOptions } from 'class-validator';
import { InvalidInputException } from '../exceptions/invalid-input.exception';

export function IsCompress(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsCompress',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const the_value_is_outside_the_allowed_range =
            value < 1 || value > 100;
          const value_is_not_int = !Number.isInteger(value);
          if (
            the_value_is_outside_the_allowed_range ||
            value_is_not_int ||
            typeof value !== 'number'
          ) {
            throw new InvalidInputException(
              `This value of ${value} does not respect the parameters to be a compress. compress needs to be an integer and be between 1 and 100`,
            );
          }
          return true;
        },
      },
    });
  };
}
