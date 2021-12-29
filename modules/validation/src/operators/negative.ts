import { pipe } from '@komore/reactive';
import { numeric } from './numeric';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a negative number
 * @note This operator implicitly applies the numeric constraint
 */
export const negative = pipe(
  numeric(),
  constraint(value => value < 0 /* TODO: isNegative from '@komore/functional' */, 'numeric.negative')
);
