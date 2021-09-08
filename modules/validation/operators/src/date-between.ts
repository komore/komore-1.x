import { pipe } from '@komore/reactive/operators';
import { constraint } from './constraint';
import { date } from './date';

/**
 * Constraint validation operator that tests whether the value is a date that falls between two other dates
 * @param earliest Earliest date that passes validation
 * @param latest Latest date that passes validation
 * @param exclusive When true, the earliest and latest dates are excluded from the valid range
 * @note This operator implicitly applies the date constraint
 */
export const dateBetween = (earliest: Date, latest: Date, exclusive?: boolean) =>
  pipe(
    date,
    constraint(
      value => (exclusive ? earliest < value && value < latest : earliest <= value && value <= latest),
      'date.between',
      { earliest, latest, exclusive }
    )
  );
