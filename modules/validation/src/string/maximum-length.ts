import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a string that is not longer than a maximum length
 */
export function maximumLength(maximum: number): MonoTypeOperatorFunction<string> {
  return createConstraintValidator(value => value.length <= maximum, 'string.length.maximum', { maximum });
}
