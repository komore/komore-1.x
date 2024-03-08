import { type KmsKeyArn } from './arn/kms-key-arn';
import { type KmsKeyId } from './id/kms-key-id';

/**
 * Enable KMS key parameters
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html#API_EnableKey_RequestParameters EnableKey Request Parameters}
 */
export interface EnableKmsKeyParameters {
  /**
   * Key identifier or ARN
   */
  readonly KeyId: KmsKeyArn | KmsKeyId;
}
