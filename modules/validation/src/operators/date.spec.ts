import { date } from './date';

describe('date constraint validation operator', () => {
  it('accepts dates', () => {
    // given
    const value: Date = new Date();
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
  });

  it('rejects strings by default', () => {
    // given
    const value: string = '2018-09-20T07:12:14Z';
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
  });

  it('accepts strings when allowed', () => {
    // given
    const value: string = '2018-09-20T07:12:14Z';
    validatorOptions.stringAsDate = true;
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(
      new Date('2018-09-20T07:12:14Z'),
      constraintValidationContext
    );
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

  it('rejects objects', () => {
    // given
    const value: any = {};
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
  });
});
