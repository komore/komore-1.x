import { type OperatorFunction } from '../operator-function';
import { map } from './map';

/**
 * Emits the given value whenever the source observable emits a value
 *
 * @param value Value to emit
 * @template T Value type
 */
export function mapTo<T>(value: T): OperatorFunction<unknown, T> {
  return map(() => value);
}
