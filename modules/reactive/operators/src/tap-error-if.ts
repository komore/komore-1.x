import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from './tap';

/**
 * Performs side-effects on the source observable's errors when a condition is met
 * @param predicate Predicate condition that determines whether the error should be tapped
 * @param errorObserver Error observer
 * @template T Value type
 */
export function tapErrorIf<T>(
  predicate: (error: unknown) => boolean,
  errorObserver: (error: unknown) => void
): MonoTypeOperatorFunction<T>;

/**
 * Performs side-effects on the source observable's errors when a condition is met
 * @param predicate Predicate condition that determines whether the error should be tapped and asserts its type
 * @param errorObserver Error observer
 * @template T Value type
 * @template S Asserted error type
 */
export function tapErrorIf<T, S>(
  predicate: (error: unknown) => error is S,
  errorObserver: (error: S) => void
): MonoTypeOperatorFunction<T>;

/**
 * Performs side-effects on the source observable's errors when a condition is met
 * @param predicate Predicate condition that determines whether the error should be tapped
 * @param errorObserver Error observer
 * @template T Value type
 */
export function tapErrorIf<T>(
  predicate: (error: unknown) => boolean,
  errorObserver: (error: unknown) => void
): MonoTypeOperatorFunction<T> {
  return tap({
    error(error: unknown) {
      if (predicate(error)) {
        errorObserver(error);
      }
    }
  });
}
