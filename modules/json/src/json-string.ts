declare const jsonString: unique symbol;

/**
 * JSON string
 *
 * @template T JSON structure
 */
export type JsonString<T> = string & {
  readonly [jsonString]: T;
};
