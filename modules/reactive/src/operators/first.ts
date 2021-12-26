import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { take } from './take';

/**
 * Emits the first value emitted by the source observable, then completes
 * @template T Value type
 */
export function first<T>(): MonoTypeOperatorFunction<T> {
  return source => source.pipe(take(1));
}
