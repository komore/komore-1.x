import { not } from '@komore/functional';
import { isBlankString } from '@komore/string';
import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether a string value is a non-blank string
 */
export function notBlank(): ConstraintValidator<string> {
  return createConstraintValidator(not(isBlankString), 'string.blank.not');
}
