/**
 * URL string
 */
export type UrlString = string & {
  readonly __tag_urlString: unique symbol;
};
