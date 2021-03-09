import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a date on or before a latest date
 * @param latest Latest date on or before which the value must be
 */
export function onOrBefore(latest: Date): MonoTypeOperatorFunction<Date> {
 return constraint(value => value <= latest, 'date.on.before', { latest });
}
