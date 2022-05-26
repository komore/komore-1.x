import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { stringContainsPattern as stringContainsPatternTest } from '@komore/regexp';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether a string value contains a pattern
 *
 * @param regExp Regular expression
 */
export function stringContainsPattern(regExp: RegExp): MonoTypeOperatorFunction<string> {
  return createConstraintValidator(stringContainsPatternTest(regExp), 'string.regexp.contains');
}
