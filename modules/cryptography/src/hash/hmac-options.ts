import { type HashAlgorithm } from './hash-algorithm';

/**
 * HMAC options
 */
export interface HmacOptions {
  /**
   * Hash algorithm
   */
  readonly hashAlgorithm: HashAlgorithm;
  /**
   * Key
   */
  readonly key: string | Uint8Array;
}
