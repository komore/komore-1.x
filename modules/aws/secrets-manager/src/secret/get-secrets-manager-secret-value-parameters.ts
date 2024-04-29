import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';
import { type SecretsManagerSecretVersionId } from './version/id/secrets-manager-secret-version-id';

/**
 * Get Secrets Manager secret value parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html#API_GetSecretValue_RequestParameters GetSecretValue Request Parameters}
 */
export interface GetSecretsManagerSecretValueParameters {
  /**
   * Secret ARN or name
   */
  readonly SecretId: SecretsManagerSecretArn | SecretsManagerSecretName;
  /**
   * Version identifier
   */
  readonly VersionId?: SecretsManagerSecretVersionId;
  /**
   * Version stage
   */
  readonly VersionStage?: string; // TODO: typed? eg AWSCURRENT
}
