import { type KmsKeyArn } from './arn/kms-key-arn';
import { type KmsKeyId } from './id/kms-key-id';

/**
 * Disable KMS key rotation parameters
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html#API_DisableKeyRotation_RequestParameters DisableKeyRotation Request Parameters}
 */
export interface DisableKmsKeyRotationParameters {
  /**
   * Key identifier or ARN
   */
  readonly KeyId: KmsKeyArn | KmsKeyId;
}
