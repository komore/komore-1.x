import { _undefined } from './undefined';

describe('Undefined constraint validator', () => {
  it('treats undefined values as valid', () => {
    // given
    const value: any = undefined;
    // when
    const result: boolean = undefinedConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
  });

  it('treats defined values as invalid', () => {
    // given
    const value: any = 5;
    // when
    const result: boolean = undefinedConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
  });
});
