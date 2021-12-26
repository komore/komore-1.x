import { noop } from '@komore/functional';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { tap } from './tap';

/**
 * Performs side-effects on the source observable's errors
 * @param errorObserver Error observer
 * @template T Value type
 */
export function tapError<T>(errorObserver: (error: unknown) => void): MonoTypeOperatorFunction<T> {
  return tap({
    complete: noop,
    error: errorObserver,
    next: noop
  });
}
