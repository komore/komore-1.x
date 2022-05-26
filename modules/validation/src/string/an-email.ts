import { type ConstraintValidator } from '../constraint-validator';
import { createConstraintValidator } from '../create-constraint-validator';

export function anEmail(): ConstraintValidator<string> {
  const emailRegExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  return createConstraintValidator((value: string) => emailRegExp.test(value), 'string.email');
}
