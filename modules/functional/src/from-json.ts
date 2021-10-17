type FromJsonParameters = Parameters<typeof JSON.parse> extends [infer _, ...(infer Parameters)]
  ? Parameters
  : never;

/**
 * Returns a function that parses a JSON string
 * @param reviver Reviver (cf. JSON.parse)
 * @returns Function that parses a JSON string
 */
export function fromJson<T>(...parameters: FromJsonParameters): (value: string) => T {
  return value => JSON.parse(value, ...parameters);
}
