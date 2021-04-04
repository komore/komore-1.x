import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tap } from './tap';

/**
 * Performs side-effects on the source observable's emitted values when a condition is met
 * @param predicate Predicate condition that determines whether the value should be tapped and asserts its type
 * @param valueObserver Value observer
 * @template T Value type
 * @template S Asserted type
 */
 export function tapValueIf<T, S extends T>(
  predicate: (value: T) => value is S,
  valueObserver: (value: S) => void
): MonoTypeOperatorFunction<T>;

/**
 * Performs side-effects on the source observable's emitted values when a condition is met
 * @param predicate Predicate condition that determines whether the value should be tapped
 * @param valueObserver Value observer
 * @template T Value type
 */
export function tapValueIf<T>(
  predicate: (value: T) => boolean,
  valueObserver: (value: T) => void
): MonoTypeOperatorFunction<T>;

export function tapValueIf<T>(
  predicate: (value: T) => boolean,
  valueObserver: (value: T) => void
): MonoTypeOperatorFunction<T> {
  return tap({
    next(value: T) {
      if (predicate(value)) {
        valueObserver(value);
      }
    }
  });
}
