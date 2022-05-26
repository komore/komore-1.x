import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a negative number or 0
 */
export function negativeOrZero(): ConstraintValidator<number | bigint> {
  return createConstraintValidator(value => value <= 0, 'numeric.negative.zero');
}
