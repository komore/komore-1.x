import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a date on or after an earliest date
 * @param earliest Earliest date on or after which the value must be
 */
export function onOrAfter(earliest: Date): MonoTypeOperatorFunction<Date> {
  return constraint(value => earliest <= value, 'date.on.after', { earliest });
}
