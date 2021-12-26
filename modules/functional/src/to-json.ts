import { type UnaryFunction } from './unary-function';

/**
 * Returns a function that turns a value into a JSON string
 * @param replacer Function that transforms the result
 * @param space Adds indentation, white space and line break characters to the JSON text
 * @returns Function that turns a value into a JSON string
 */
export function toJson<T>(
  replacer?: (this: unknown, key: string, value: unknown) => unknown,
  space?: string | number
): UnaryFunction<T, string>;

/**
 * Returns a function that turns a value into a JSON string
 * @param replacer Array of strings and numbers that acts as an approved list
 * @param space Adds indentation, white space and line break characters to the JSON text
 * @returns Function that turns a value into a JSON string
 */
export function toJson<T>(
  replacer?: ReadonlyArray<number | string>,
  space?: string | number
): UnaryFunction<T, string>;

export function toJson<T>(
  replacer?: ((this: unknown, key: string, value: unknown) => unknown) | ReadonlyArray<number | string>,
  space?: string | number
): UnaryFunction<T, string> {
  return value => JSON.stringify(value, replacer as undefined, space);
}
