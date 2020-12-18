import { pipe } from 'rxjs';
import { date } from './date';
import { validateConstraint } from './validate-constraint';

/**
 * Constraint validation operator that tests whether the value is a date in the past or now
 * @note This operator implicitly applies the date constraint
 */
export const pastOrNow = pipe(
  date,
  validateConstraint(value => value <= new Date(), 'date.past.now')
);
