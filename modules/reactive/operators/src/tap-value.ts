import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from './tap';

/**
 * Performs side-effects on the source observable's emitted values
 * @param valueObserver Value observer
 * @template T Value type
 */
export function tapValue<T>(valueObserver: (value: T) => void): MonoTypeOperatorFunction<T> {
  return tap({
    next: valueObserver
  });
}
