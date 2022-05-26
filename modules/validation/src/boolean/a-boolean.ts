import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a boolean
 */
export function aBoolean(): ConstraintValidator<unknown, boolean> {
  return createConstraintValidator((value): value is boolean => typeof value === 'boolean', 'boolean.is');
}
