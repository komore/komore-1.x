import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is specific string
 *
 * @param string String
 */
export function string<S extends string>(string: S): ConstraintValidator<string, S> {
  return createConstraintValidator((value): value is S => value === string, 'string.value');
}
