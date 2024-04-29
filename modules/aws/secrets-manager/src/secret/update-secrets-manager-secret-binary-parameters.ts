import { type Base64String } from '@komore/string';

import { type UpdateSecretsManagerSecretBaseParameters } from './update-secrets-manager-secret-base-parameters';

/**
 * Update Secrets Manager secret binary parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html#API_UpdateSecret_RequestParameters UpdateSecret Request Parameters}
 */
export interface UpdateSecretsManagerSecretBinaryParameters extends UpdateSecretsManagerSecretBaseParameters {
  /**
   * Secret binary data
   */
  readonly SecretBinary: Base64String;
}
