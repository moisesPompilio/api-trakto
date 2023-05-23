import { InvalidInputException } from '../exceptions/invalid-input.exception';
import { IsUrlWithCodeExcption } from './is-url.-with-code-exception.decorator';
import { validate } from 'class-validator';

describe('IsUrlWithCodeExcption', () => {
  class TestClass {
    @IsUrlWithCodeExcption()
    public url: any;
  }

  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should pass validation for a valid URL', async () => {
    const validUrl = 'https://www.example.com';
    testClass.url = validUrl;

    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should throw InvalidInputException for an invalid URL', async () => {
    const invalidUrl = 'invalid-url';
    testClass.url = invalidUrl;

    let error: Error;
    try {
      await validate(testClass);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(InvalidInputException);
  });

  it('should throw InvalidInputException with the correct error message', async () => {
    const invalidUrl = 'invalid-url';
    testClass.url = invalidUrl;

    let error: Error;
    try {
      await validate(testClass);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe(`That link ${invalidUrl} is invalid`);
  });
  it('should throw InvalidInputException for a URL that is not a string', async () => {
    const invalidUrl = true;
    testClass.url = invalidUrl;

    let error: Error;
    try {
      await validate(testClass);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe(`That link ${invalidUrl} is invalid`);
  });
});
