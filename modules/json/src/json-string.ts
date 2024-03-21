declare const jsonString: unique symbol;

/**
 * JSON string
 *
 * @template T JSON structure
 */
export type JsonString<T = unknown> = string & {
  readonly [jsonString]: T;
};
