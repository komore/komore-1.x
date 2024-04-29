import { type KmsKeyArn, type KmsKeyId } from '@komore/aws/kms';

import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';

/**
 * Update Secrets Manager secret base parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html#API_UpdateSecret_RequestParameters UpdateSecret Request Parameters}
 */
export interface UpdateSecretsManagerSecretBaseParameters {
  /**
   * Client request token
   */
  readonly ClientRequestToken: string;
  /**
   * Secret description
   */
  readonly Description?: string;
  /**
   * KMS key ARN, identifier or alias used to encrypt secret versions
   */
  readonly KmsKeyId?: KmsKeyArn | KmsKeyId | string;
  /**
   * Secret ARN or name
   */
  readonly SecretId: SecretsManagerSecretArn | SecretsManagerSecretName;
}
