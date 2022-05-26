import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is a date in the past
 */
export function past(): MonoTypeOperatorFunction<Date> {
  return constraint((value: Date) => value < new Date(), 'date.past');
}
