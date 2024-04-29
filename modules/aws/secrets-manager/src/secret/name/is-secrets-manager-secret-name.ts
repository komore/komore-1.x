import { type SecretsManagerSecretName } from './secrets-manager-secret-name';

/**
 * Tests whether a string is a valid Secrets Manager secret name
 *
 * @param secretName String
 * @returns true if the string is a valid Secrets Manager secret name
 */
export function isSecretsManagerSecretName(secretName: string): secretName is SecretsManagerSecretName {
  return /^[\w/_+=.@-]{1,512}$/.test(secretName);
}
