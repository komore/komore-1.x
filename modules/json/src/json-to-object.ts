/**
 * Returns a function that parses a JSON string
 * @param reviver Reviver (cf. JSON.parse)
 * @returns Function that parses a JSON string
 */
export function jsonToObject<T = unknown>(...parameters: JsonToObjectParameters): (json: string) => T {
  return value => JSON.parse(value, ...parameters);
}

type JsonToObjectParameters = Parameters<typeof JSON.parse> extends [infer _, ...infer Parameters] ? Parameters : never;
