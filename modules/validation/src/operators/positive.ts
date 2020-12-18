import { pipe } from 'rxjs';
import { numeric } from './numeric';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a positive number
 * @note This operator implicitly applies the numeric constraint
 */
export const positive = pipe(
  numeric,
  constraint(value => 0 < value, 'numeric.positive')
);
