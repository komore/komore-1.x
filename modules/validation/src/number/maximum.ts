import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation that tests whether the value equal or higher than a minimum
 *
 * @param minimum Minimum value to compare with
 */
export function maximum(maximum: number): ConstraintValidator<number> {
  return createConstraintValidator(value => value <= maximum, 'numeric.maximum', { maximum });
}
