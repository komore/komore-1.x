/**
 * Base 64 string
 */
export type Base64String = string & {
  readonly __tag_stringBase64: unique symbol;
};
