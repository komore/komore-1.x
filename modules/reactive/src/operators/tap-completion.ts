import { noop } from '@komore/functional';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { tap } from './tap';

/**
 * Performs side-effects when the source observable completes
 * @param completionObserver Completion observer
 * @template T Value type
 */
export function tapCompletion<T>(completionObserver: () => void): MonoTypeOperatorFunction<T> {
  return tap({
    complete: completionObserver,
    error: noop,
    next: noop
  });
}
