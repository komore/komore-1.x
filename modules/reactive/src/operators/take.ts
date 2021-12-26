import { take as rxjsTake } from 'rxjs';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';

/**
 * Emits the first `count` values emitted by the source observable
 * @param count Number of values to emit
 * @template T Value type
 */
export function take<T>(count: number): MonoTypeOperatorFunction<T> {
  return rxjsTake(count);
}
