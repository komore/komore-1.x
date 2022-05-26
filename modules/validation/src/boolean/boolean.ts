import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

export function boolean<B extends boolean>(booleanValue: B): ConstraintValidator<boolean, B> {
  return createConstraintValidator((value): value is B => value === booleanValue, `boolean.${booleanValue}`);
}
