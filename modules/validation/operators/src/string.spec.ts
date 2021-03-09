import { string } from './string';

describe('string constraint validation operator', () => {
  it('accepts strings', () => {
    // given
    const value: string = '123';
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
  });

  it('rejects numbers', () => {
    // given
    const value: number = 123;
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
  });

  it('rejects booleans', () => {
    // given
    const value: boolean = true;
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
  });
});
