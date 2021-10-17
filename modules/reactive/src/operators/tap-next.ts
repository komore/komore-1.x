import type { MonoTypeOperatorFunction } from '../operator/mono-type-operator-function';
import { tap } from './tap';

/**
 * Performs side-effects on the source observable's emitted values
 * @param nextObserver Next observer
 * @template T Value type
 */
export function tapNext<T>(nextObserver: (value: T) => void): MonoTypeOperatorFunction<T> {
  return tap({
    next: nextObserver
  });
}
