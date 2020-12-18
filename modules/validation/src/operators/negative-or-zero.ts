import { pipe } from 'rxjs';
import { numeric } from './numeric';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a negative number or zero
 * @note This operator implicitly applies the numeric constraint
 */
export const negativeOrZero = pipe(
  numeric,
  constraint(value => value <= 0, 'numeric.negative.zero')
);
