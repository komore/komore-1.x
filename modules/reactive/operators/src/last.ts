import type { MonoTypeOperatorFunction, Observable } from '@komore/reactive';
import { takeLast } from './take-last';

/**
 * Emits the last value from an observable
 * @template T Value type
 */
export function last<T>(): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.pipe(takeLast(1));
}
