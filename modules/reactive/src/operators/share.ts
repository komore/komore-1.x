import { share as rxjsShare } from 'rxjs';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';

/**
 * Returns a new observable that shares the original observable
 * @template T Value type
 */
export function share<T>(): MonoTypeOperatorFunction<T> {
  return rxjsShare<T>();
}
