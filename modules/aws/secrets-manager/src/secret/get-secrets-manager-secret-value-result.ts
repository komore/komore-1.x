import { type Base64String } from '@komore/string';
import { type MillisecondsSinceEpoch } from '@komore/temporal';

import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';
import { type SecretsManagerSecretVersionId } from './version/id/secrets-manager-secret-version-id';

/**
 * Get Secrets Manager secret value result
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html#API_GetSecretValue_ResponseElements GetSecretValue Response Elements}
 */
export interface GetSecretsManagerSecretValueResult {
  /**
   * Secret ARN
   */
  readonly ARN: SecretsManagerSecretArn;
  readonly CreatedDate: MillisecondsSinceEpoch;
  /**
   * Secret name
   */
  readonly Name: SecretsManagerSecretName;
  /**
   * Secret value, if it was provided as binary
   */
  readonly SecretBinary?: Base64String;
  /**
   * Secret value, if it was provided as a string
   */
  readonly SecretString?: string;
  /**
   * Secret version identifier
   */
  readonly VersionId: SecretsManagerSecretVersionId;
}
