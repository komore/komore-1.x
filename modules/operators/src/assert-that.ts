import type { MonoTypeOperatorFunction, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Throws an error unless a condition is met
 * @param condition Condition that causes an error to be thrown when false
 * @param errorFactory Error factory
 */
export function assertThat<T, S extends T>(
  predicate: (value: T, index: number) => value is S,
  errorFactory: (value: T) => unknown
): OperatorFunction<T, S>;

/**
 * Throws an error unless a condition is met
 * @param predicate Condition that causes an error to be thrown when false
 * @param errorFactory Error factory
 */
export function assertThat<T>(
  predicate: (value: T, index: number) => boolean,
  errorFactory: (value: T) => unknown
): MonoTypeOperatorFunction<T>;

export function assertThat<T>(
  condition: (value: T, index: number) => boolean,
  errorFactory: (value: T) => unknown
): MonoTypeOperatorFunction<T> {
  return map((value, index) => {
    if (condition(value, index)) {
      return value;
    }

    const error = errorFactory(value);
    throw error;
  });
}
