import { isNumberPositive } from '@komore/math';
import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a positive number
 */
export function positive(): ConstraintValidator<number | bigint> {
  return createConstraintValidator(isNumberPositive, 'numeric.positive.strictly');
}
