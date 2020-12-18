import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a date
 */
export const date = pipe(
  map(value => {
    if (typeof value === 'number' || typeof value === 'string') {
      const dateValue: Date = new Date(value);
      if (!isNaN(dateValue.getTime())) {
        return dateValue;
      }
    }

    return value;
  }),
  constraint((value): value is Date => value instanceof Date, 'date')
);
