import { type KmsKeySpec } from './spec/kms-key-spec';
import { type KmsKeyUsage } from './usage/kms-key-usage';

/**
 * Create KMS key parameters
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html#API_CreateKey_RequestParameters CreateKey Request Parameters}
 */
export interface CreateKmsKeyParameters {
  /**
   * Whether to skip the policy lockout safety check
   */
  readonly BypassPolicyLockoutSafetyCheck?: boolean;
  /**
   * Identifier for the custom key store where the key should be created
   */
  readonly CustomKeyStoreId?: string; // TODO: typed
  /**
   * Description
   */
  readonly Description?: string;
  /**
   * Key type
   */
  readonly KeySpec?: KmsKeySpec;
  /**
   * Key usage
   */
  readonly KeyUsage?: KmsKeyUsage;
}
