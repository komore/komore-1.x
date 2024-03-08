import { type UUID } from '@komore/uuid';

/**
 * KMS key identifier
 */
export type KmsKeyId = UUID & {
  readonly __tag_awsKmsKeyId: unique symbol;
};
