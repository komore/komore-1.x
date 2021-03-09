import type { OperatorFunction } from '@komore/reactive';
import { of } from '@komore/reactive';
import { catchError } from './catch-error';

/**
 * Emits a value if the source observable errors
 * @template T Value type
 * @template R Default value type
 */
export function defaultIfError<T, R>(defaultValue: R): OperatorFunction<T, T | R> {
  return catchError(() => of(defaultValue));
}
