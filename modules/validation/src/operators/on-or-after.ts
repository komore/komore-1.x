import { pipe } from 'rxjs';
import { constraint } from './constraint';
import { date } from './date';

/**
 * Constraint validation operator that tests whether the value is a date on or after an earliest date
 * @param earliest Earliest date on or after which the value must be
 * @note This operator implicitly applies the collection constraint
 */
export const onOrAfter = (earliest: Date) =>
  pipe(
    date,
    constraint(value => earliest <= value, 'date.on.after', { earliest })
  );
