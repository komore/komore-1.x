import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is date earlier than a later date
 * @param later Later date before which the value must be
 */
export function before(later: Date): MonoTypeOperatorFunction<Date> {
  return constraint(value => value < later, 'date.before', { later });
}
