import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { stringToMatchesWith } from '@komore/string';
import { createConstraintValidator } from '../create-constraint-validator';

/**
 * Constraint validation operator that tests whether a string value matches a pattern
 *
 * @param regExp Regular expression used to match the string
 */
export function stringMatchesPattern(regExp: RegExp): MonoTypeOperatorFunction<string> {
  const toMatches = stringToMatchesWith(regExp);
  return createConstraintValidator(str => toMatches(str) !== null, 'string.matches.regexp');
}
