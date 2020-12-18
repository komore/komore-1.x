import { pipe } from 'rxjs';
import { constraint } from './constraint';
import { date } from './date';

/**
 * Constraint validation operator that tests whether the value is date later than an earlier date
 * @param earlier Earlier date after which the value must be
 * @note This operator implicitly applies the collection constraint
 */
export const after = (earlier: Date) =>
  pipe(
    date,
    constraint(value => earlier < value, 'date.after', { earlier })
  );
