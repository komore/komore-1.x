import { pipe } from 'rxjs';
import { constraint } from './constraint';
import { date } from './date';

/**
 * Constraint validation operator that tests whether the value is a date on or before a latest date
 * @param latest Latest date on or before which the value must be
 * @note This operator implicitly applies the collection constraint
 */
export const onOrBefore = (latest: Date) =>
  pipe(
    date,
    constraint(value => value <= latest, 'date.on.before', { latest })
  );
