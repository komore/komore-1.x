/**
 * URL-encoded string
 */
export type UrlEncodedString = string & {
  readonly __tag_urlEncodedString: unique symbol;
};
