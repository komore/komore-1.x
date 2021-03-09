import { pipe } from '@komore/reactive';
import { string } from './string';
import { constraint } from './constraint';

const notBlankRegExp = /[^\s]+/;

/**
 * Constraint validation operator that tests whether the value is a non-blank string
 * @note This operator implicitly applies the string constraint
 */
export const notBlank = pipe(
  string,
  constraint(value => notBlankRegExp.test(value), 'string.blank.not')
);
