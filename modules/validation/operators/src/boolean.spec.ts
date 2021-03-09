import { boolean } from './boolean';

describe('boolean constraint validation operator', () => {
  it('accepts booleans', () => {
    given: 'a boolean'
    const value: boolean = true;
    // when
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(1);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledWith(value, constraintValidationContext);
  });

  it('rejects other types', () => {
    given:
    const value: number = 1;
    when:
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    then:
    expect(result).toBe(false);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
  });

  it('rejects strings', () => {
    given:
    const value: string = 'true';
    when:
    const result: boolean = abstractConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
    expect(abstractConstraintValidator.isValidValue).toHaveBeenCalledTimes(0);
  });
});
