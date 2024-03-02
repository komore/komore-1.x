import { type HashAlgorithm } from './hash-algorithm';

/**
 * Hash options
 */
export interface HashOptions {
  /**
   * Hash algorithm
   */
  readonly hashAlgorithm: HashAlgorithm;
}
