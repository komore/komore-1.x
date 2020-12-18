import { pipe } from 'rxjs';
import { constraint } from './constraint';
import { date } from './date';

/**
 * Constraint validation operator that tests whether the value is date earlier than a later date
 * @param earlier Later date before which the value must be
 * @note This operator implicitly applies the collection constraint
 */
export const before = (later: Date) =>
  pipe(
    date,
    constraint(value => value < later, 'date.before', { later })
  );
