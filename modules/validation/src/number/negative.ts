import { isNumberNegative } from '@komore/math';
import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a negative number
 */
export function negative(): ConstraintValidator<number | bigint> {
  return createConstraintValidator(isNumberNegative, 'numeric.negative.strictly');
}
