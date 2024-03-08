import { type KmsKeyArn } from './arn/kms-key-arn';
import { type KmsKeyId } from './id/kms-key-id';

/**
 * Enable KMS key rotation parameters
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html#API_EnableKeyRotation_RequestParameters EnableKeyRotation Request Parameters}
 */
export interface EnableKmsKeyRotationParameters {
  /**
   * Key identifier or ARN
   */
  readonly KeyId: KmsKeyArn | KmsKeyId;
}
