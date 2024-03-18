/**
 * MD5 string
 */
export type Md5String = string & {
  readonly __tag_stringMD5: unique symbol;
};
