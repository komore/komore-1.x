import { createErrorType, errorProperties } from '@komore/error';

import { cryptographyDomain } from './cryptography.domain';
import { type HashAlgorithm } from './hash/hash-algorithm';

/**
 * Cryptography error
 */
export const cryptographyError = createErrorType(cryptographyDomain, {
  /**
   * Unsupported hash algorithm
   */
  unsupportedHashAlgorithn: errorProperties<{
    /**
     * Hash algorithm
     */
    readonly hashAlgorithm: HashAlgorithm;
  }>(),
});
