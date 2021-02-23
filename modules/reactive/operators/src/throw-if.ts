import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Throws an error if a condition is met
 * @param condition Condition
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwIf<T>(
  condition: (value: T, index: number) => boolean,
  errorFactory: (value: T) => unknown
): MonoTypeOperatorFunction<T> {
  return map((value, index) => {
    if (condition(value, index)) {
      const error = errorFactory(value);
      throw error;
    }

    return value;
  });
}
