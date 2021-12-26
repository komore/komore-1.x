import { noop } from '@komore/functional';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { tap } from './tap';

/**
 * Performs side-effects on the source observable's emitted values
 * @param nextObserver Next observer
 * @template T Value type
 */
export function tapNext<T>(nextObserver: (value: T) => void): MonoTypeOperatorFunction<T> {
  return tap({
    complete: noop,
    error: noop,
    next: nextObserver,
  });
}
