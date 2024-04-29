import { type UpdateSecretsManagerSecretBinaryParameters } from './update-secrets-manager-secret-binary-parameters';
import { type UpdateSecretsManagerSecretStringParameters } from './update-secrets-manager-secret-string-parameters';

/**
 * Update Secrets Manager secret parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html#API_UpdateSecret_RequestParameters UpdateSecret Request Parameters}
 */
export type UpdateSecretsManagerSecretParameters =
  | UpdateSecretsManagerSecretBinaryParameters
  | UpdateSecretsManagerSecretStringParameters;
