import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

export function future(): MonoTypeOperatorFunction<Date> {
  return constraint(value => new Date() < value, 'date.future');
}
