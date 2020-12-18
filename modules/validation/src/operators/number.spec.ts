import { number } from './number';

describe('number constraint validation operator', () => {
  it('accepts numbers', () => {
    // given
    const value: number = 123;
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
  });

  it('rejects strings by default', () => {
    // given
    const value: string = '123';
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
  });

  it('accepts strings when allowed', () => {
    // given
    const value: string = '123';
    validatorOptions.stringAsNumber = true;
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(123, constraintValidationContext);
  });
});
