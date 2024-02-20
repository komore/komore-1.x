import { type JsonString } from './json-string';

/**
 * Returns a function that parses a JSON string
 *
 * @param reviver Reviver (cf. JSON.parse)
 * @returns Function that parses a JSON string
 */
export function jsonToObject(...parameters: JsonToObjectParameters): <T>(json: JsonString<T>) => T;
export function jsonToObject<T = unknown>(...parameters: JsonToObjectParameters): (json: string) => T;

export function jsonToObject<T = unknown>(...parameters: JsonToObjectParameters): (json: string) => T {
  return value => JSON.parse(value, ...parameters);
}

type JsonToObjectParameters =
  Parameters<typeof JSON.parse> extends [infer _, ...infer Parameters] ? Readonly<Parameters> : never;
