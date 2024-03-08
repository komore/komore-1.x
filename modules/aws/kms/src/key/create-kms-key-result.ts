import { type KmsKeyMetadata } from './kms-key-metadata';

/**
 * Create KMS key result
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html#API_CreateKey_ResponseElements CreateKey Response Elements}
 */
export interface CreateKmsKeyResult {
  /**
   * Key metadata
   */
  readonly KeyMetadata: KmsKeyMetadata;
}
