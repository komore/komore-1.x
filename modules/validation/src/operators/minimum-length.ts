import { pipe } from 'rxjs';
import { string } from './string';
import { validateConstraint } from './validate-constraint';

/**
 * Constraint validation operator that tests whether the value is a string that is at least a minimum length
 * @note This operator implicitly applies the string constraint
 */
export const minimumLength = (minimum: number) => pipe(
  string,
  validateConstraint(value => minimum <= value.length, 'string.length.minimum', { minimum })
);
