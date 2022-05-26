import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { map } from './map';
import { type ThrowIfOptions } from './throw-if-options';

/**
 * Throws an error if a condition is met
 * @param condition Condition
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwIf<T>(
  condition: (value: T, index: number) => boolean,
  errorFactory: (value: T) => unknown
): MonoTypeOperatorFunction<T>;

/**
 * Throws an error if a condition is met
 * @param condition Condition
 * @param errorFactory Error factory
 * @template T Value type
 */
export function throwIf<T>({ condition, errorFactory }: ThrowIfOptions<T>): MonoTypeOperatorFunction<T>;

export function throwIf<T>(
  conditionOrProperties: ((value: T, index: number) => boolean) | ThrowIfOptions<T>,
  errorFactoryOrUndefined?: (value: T) => unknown
): MonoTypeOperatorFunction<T> {
  const properties = typeof conditionOrProperties !== 'function' ? conditionOrProperties : undefined;
  const condition = properties?.condition ?? (conditionOrProperties as ThrowIfOptions<T>['condition']);
  const errorFactory = properties?.errorFactory ?? (errorFactoryOrUndefined as ThrowIfOptions<T>['errorFactory']);
  return map((value, index) => {
    if (condition(value, index)) {
      const error = errorFactory(value);
      throw error;
    }

    return value;
  });
}
