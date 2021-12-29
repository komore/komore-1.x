import { type OperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is present
 * @template T Value type
 */
export function required<T>(): OperatorFunction<T, NonNullable<T>> {
  return constraint((value): value is NonNullable<T> => value !== undefined, 'required');
}
