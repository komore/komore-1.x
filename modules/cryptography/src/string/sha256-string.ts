import { type Base64String } from '@komore/string';

/**
 * SHA-256 string
 */
export type Sha256String = Base64String & {
  readonly __tag_cryptographySha256String: unique symbol;
};
