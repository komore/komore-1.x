import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a positive number or 0
 */
export function positiveOrZero(): ConstraintValidator<number | bigint> {
  return createConstraintValidator(value => value >= 0, 'numeric.positive.zero');
}
