import type { OperatorFunction } from '@komore/reactive';
import { map } from './map';

/**
 * Operator function that turns an emitted value into a JSON string
 * @param replacer Function that transforms the result
 * @param space Adds indentation, white space and line break characters to the JSON text
 */
export function serializeJson<T>(
  replacer?: (this: unknown, key: string, value: unknown) => unknown,
  space?: string | number
): OperatorFunction<T, string>;

/**
 * Operator function that turns an emitted value into a JSON string
 * @param replacer Array of strings and numbers that acts as an approved list
 * @param space Adds indentation, white space and line break characters to the JSON text
 */
export function serializeJson<T>(
  replacer?: ReadonlyArray<number | string>,
  space?: string | number
): OperatorFunction<T, string>;

export function serializeJson<T>(
  replacer?: ((this: unknown, key: string, value: unknown) => unknown) | ReadonlyArray<number | string>,
  space?: string | number
): OperatorFunction<T, string> {
  return map(value => JSON.stringify(value, replacer as undefined, space));
}
