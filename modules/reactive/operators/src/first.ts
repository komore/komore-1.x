import type { MonoTypeOperatorFunction, Observable } from '@komore/reactive';
import { take } from './take';

/**
 * Emits the first value emitted by the source observable, then completes
 * @template T Value type
 */
export function first<T>(): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.pipe(take(1));
}
