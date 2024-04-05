/**
 * MD5 string
 */
export type Md5String = string & {
  readonly __tag_cryptographyMd5String: unique symbol;
};
