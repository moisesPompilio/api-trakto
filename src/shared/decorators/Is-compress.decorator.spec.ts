import { IsCompress } from './is-compress.decorator';
import { InvalidInputException } from '../exceptions/invalid-input.exception';
import { validate } from 'class-validator';

describe('IsCompress', () => {
  class TestClass {
    @IsCompress()
    compressValue: any;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  it('should not throw an exception if the value is a valid compress', async () => {
    testInstance.compressValue = 50;
    const validationErrors = await validate(testInstance);
    expect(validationErrors.length).toBe(0);
  });

  it('should throw an InvalidInputException if the value is outside the allowed range', async () => {
    testInstance.compressValue = 101;

    let error: Error;
    try {
      await validate(testInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(InvalidInputException);
  });

  it('should throw an InvalidInputException if the value is not an integer', async () => {
    testInstance.compressValue = 3.14;

    let error: Error;
    try {
      await validate(testInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(InvalidInputException);
  });

  it('should throw an InvalidInputException if the value is not a number', async () => {
    testInstance.compressValue = '50';

    let error: Error;
    try {
      await validate(testInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(InvalidInputException);
  });
  it('should throw InvalidInputException with the correct error message', async () => {
    testInstance.compressValue = '50';

    let error: Error;
    try {
      await validate(testInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(InvalidInputException);
    expect(error.message).toBe(
      `This value of ${testInstance.compressValue} does not respect the parameters to be a compress. compress needs to be an integer and be between 1 and 100`,
    );
  });
});
