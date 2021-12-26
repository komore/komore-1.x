import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { containsPattern } from '@komore/regexp';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint
 * @param regExp 
 * @returns 
 */
export function pattern(regExp: RegExp): MonoTypeOperatorFunction<string> {
  return createConstraintValidator(containsPattern(regExp), 'string.regexp');
}
