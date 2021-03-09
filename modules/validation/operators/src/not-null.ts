import type { OperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

/**
 * Constraint validation operator that tests whether the value is not null
 */
export function notNull<T>(): OperatorFunction<T | null, T> {
  return constraint((value): value is null => value !== null, 'null.not');
}

