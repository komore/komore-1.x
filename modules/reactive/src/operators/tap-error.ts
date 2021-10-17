import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from './tap';

/**
 * Performs side-effects on the source observable's errors
 * @param errorObserver Error observer
 * @template T Value type
 */
export function tapError<T>(errorObserver: (error: unknown) => void): MonoTypeOperatorFunction<T> {
  return tap({
    error: errorObserver
  });
}
