import { type JsonString } from './json-string';

/**
 * Returns a function that turns a value into a JSON string
 *
 * @param replacer Function that transforms the result
 * @param space Adds indentation, white space and line break characters to the JSON text
 * @returns Function that turns a value into a JSON string
 */
export function valueToJson<T = unknown>(
  replacer?: (this: unknown, key: string, value: unknown) => unknown,
  space?: string | number
): (value: T) => JsonString<T>;

/**
 * Returns a function that turns a value into a JSON string
 *
 * @param replacer Array of strings and numbers that acts as an approved list
 * @param space Adds indentation, white space and line break characters to the JSON text
 * @returns Function that turns a value into a JSON string
 */
export function valueToJson<T = unknown>(
  replacer?: ReadonlyArray<number | string>,
  space?: string | number
): (value: T) => JsonString<T>;

export function valueToJson<T = unknown>(
  replacer?: ((this: unknown, key: string, value: unknown) => unknown) | ReadonlyArray<number | string>,
  space?: string | number
): (value: T) => JsonString<T> {
  return value => JSON.stringify(value, replacer as undefined, space) as JsonString<T>;
}
