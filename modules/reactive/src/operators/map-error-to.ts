import { of } from '../creation/of';
import { type OperatorFunction } from '../operator-function';
import { catchError } from './catch-error';

/**
 * Emits the given value whenever the source observable emits an error
 * @param value Value to emit
 * @template T Value type
 */
export function mapErrorTo<T>(value: T): OperatorFunction<unknown, T> {
  return catchError(() => of(value)) as OperatorFunction<unknown, T>;
}
