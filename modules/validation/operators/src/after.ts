import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is date later than an earlier date
 * @param earlier Earlier date after which the value must be
 */
export function after(earlier: Date): MonoTypeOperatorFunction<Date> {
  return constraint(value => earlier < value, 'date.after', { earlier });
}
