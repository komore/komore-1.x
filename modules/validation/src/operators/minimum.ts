import { pipe } from 'rxjs';
import { numeric } from './numeric';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value equal or higher than a minimum
 * @param minimum Minimum value to compare with
 * @note This operator implicitly applies the numeric constraint
 */
export const minimum = (minimum: number) =>
  pipe(
    numeric,
    constraint(value => minimum <= value, 'numeric.minimum', { minimum })
  );
