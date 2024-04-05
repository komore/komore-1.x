import { type Base64String } from '@komore/string';

/**
 * SHA-1 string
 */
export type Sha1String = Base64String & {
  readonly __tag_cryptographySha1String: unique symbol;
};
