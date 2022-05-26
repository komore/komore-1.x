import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a string
 */
export const aString: ConstraintValidator<unknown, string> = createConstraintValidator(
  (value): value is string => typeof value === 'string',
  'string.is'
);
