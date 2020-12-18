import { pipe } from 'rxjs';
import { string } from './string';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a string that is not longer than a maximum length
 * @note This operator implicitly applies the string constraint
 */
export const maximumLength = (maximum: number) =>
  pipe(
    string,
    constraint(value => value.length <= maximum, 'string.length.maximum', { maximum })
  );
