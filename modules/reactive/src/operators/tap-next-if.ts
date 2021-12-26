import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { tapNext } from './tap-next';

/**
 * Performs side-effects on the source observable's emitted values when a condition is met
 * @param predicate Predicate condition that determines whether the value should be tapped and asserts its type
 * @param nextObserver Next observer
 * @template T Value type
 * @template S Asserted type
 */
export function tapNextIf<T, S extends T>(
  predicate: (value: T) => value is S,
  nextObserver: (value: S) => void
): MonoTypeOperatorFunction<T>;

/**
 * Performs side-effects on the source observable's emitted values when a condition is met
 * @param predicate Predicate condition that determines whether the value should be tapped
 * @param nextObserver Value observer
 * @template T Value type
 */
export function tapNextIf<T>(
  predicate: (value: T) => boolean,
  nextObserver: (value: T) => void
): MonoTypeOperatorFunction<T>;

export function tapNextIf<T>(
  predicate: (value: T) => boolean,
  nextObserver: (value: T) => void
): MonoTypeOperatorFunction<T> {
  return tapNext(value => {
    if (predicate(value)) {
      nextObserver(value);
    }
  });
}
