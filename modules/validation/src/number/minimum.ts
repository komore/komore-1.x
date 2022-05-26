import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation that tests whether the value equal or higher than a minimum
 *
 * @param minimum Minimum value to compare with
 */
export function minimum(minimum: number): ConstraintValidator<number> {
  return createConstraintValidator(value => minimum <= value, 'numeric.minimum', { minimum });
}
