import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { type OperatorFunction } from '../operator-function';
import { map } from './map';

/**
 * Throws an error unless a condition is met
 * @param condition Condition
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwUnless<T, U extends T>(
  condition: (value: T, index: number) => value is U,
  errorFactory: (value: T) => unknown
): OperatorFunction<T, U>;

/**
 * Throws an error unless a condition is met
 * @param condition Condition
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwUnless<T>(
  condition: (value: T, index: number) => boolean,
  errorFactory: (value: T) => unknown
): MonoTypeOperatorFunction<T>;

export function throwUnless<T>(
  condition: (value: T, index: number) => boolean,
  errorFactory: (value: T) => unknown
): MonoTypeOperatorFunction<T> {
  return map((value, index) => {
    if (!condition(value, index)) {
      const error = errorFactory(value);
      throw error;
    }

    return value;
  });
}
