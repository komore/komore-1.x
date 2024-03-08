import { type KmsKeyArn } from './arn/kms-key-arn';
import { type KmsKeyId } from './id/kms-key-id';

/**
 * Disable KMS key parameters
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html#API_DisableKey_RequestParameters DisableKey Request Parameters}
 */
export interface DisableKmsKeyParameters {
  /**
   * Key identifier or ARN
   */
  readonly KeyId: KmsKeyArn | KmsKeyId;
}
