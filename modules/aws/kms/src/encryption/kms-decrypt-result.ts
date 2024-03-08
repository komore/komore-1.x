import { type Base64String } from '@komore/string';

import { type KmsKeyArn } from '../key/arn/kms-key-arn';

/**
 * KMS decrypt result
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html#API_Decrypt_ResponseElements Decrypt Response Elements}
 */
export interface KmsDecryptResult {
  readonly CiphertextForRecipient: Base64String;
  readonly EncryptionAlgorithm: string; // TODO: type
  readonly KeyId: KmsKeyArn;
  readonly Plaintext: Base64String;
}
