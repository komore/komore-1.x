import { not } from '@komore/functional';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { isBlank } from '@komore/string';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether the value is a non-blank string
 */
export function notBlank(): MonoTypeOperatorFunction<string> {
  return createConstraintValidator(not(isBlank), 'string.blank.not');
}
