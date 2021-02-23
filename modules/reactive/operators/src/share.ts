import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { share as rxjsShare } from 'rxjs/operators';

/**
 * Returns a new observable that shares the original observable
 * @template T Value type
 */
export function share<T>(): MonoTypeOperatorFunction<T> {
  return rxjsShare<T>();
}
