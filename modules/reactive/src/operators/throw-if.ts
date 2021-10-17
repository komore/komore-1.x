import type { MonoTypeOperatorFunction } from '../operator/mono-type-operator-function';
import { map } from './map';

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
export function throwIf<T>({ condition, errorFactory }: ThrowIfProperties<T>): MonoTypeOperatorFunction<T>;

export function throwIf<T>(
  conditionOrProperties: ((value: T, index: number) => boolean) | ThrowIfProperties<T>,
  errorFactoryOrUndefined?: (value: T) => unknown
): MonoTypeOperatorFunction<T> {
  const properties = typeof conditionOrProperties !== 'function' ? conditionOrProperties : undefined;
  const condition = properties?.condition ?? (conditionOrProperties as ThrowIfProperties<T>['condition']);
  const errorFactory = properties?.errorFactory ?? (errorFactoryOrUndefined as ThrowIfProperties<T>['errorFactory']);
  return map((value, index) => {
    if (condition(value, index)) {
      const error = errorFactory(value);
      throw error;
    }

    return value;
  });
}

interface ThrowIfProperties<T> {
  readonly condition: (value: T, index: number) => boolean;
  readonly errorFactory: (value: T) => unknown;
}
