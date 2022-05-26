import { stringNotBlank } from './string-not-blank';
import { type ConstraintValidator } from '../ConstraintValidator';
import { ConstraintValidationContext } from '../validation';

describe('String not blank constraint validator', () => {
  let notBlankConstraintValidator: ConstraintValidator<any>;
  let constraintValidationContext: ConstraintValidationContext;

  it('considers non-blank strings to be valid', () => {
    // given
    const value = ' t e s t ';
    // when
    const result = notBlankConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(true);
  });

  it('considers blank strings to be invalid', () => {
    // given
    const value = '  \t  ';
    // when
    const result = notBlankConstraintValidator.isValid(value, constraintValidationContext);
    // then
    expect(result).toBe(false);
  });
});
