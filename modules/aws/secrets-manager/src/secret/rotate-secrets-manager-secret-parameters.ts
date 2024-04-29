import { type LambdaFunctionArn } from '@komore/aws/lambda';

import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';
import { type SecretsManagerSecretRotationRules } from './secrets-manager-secret-rotation-rules';

/**
 * Rotate Secrets Manager secret parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotateSecret.html#API_RotateSecret_RequestParameters RotateSecret Request Parameters}
 */
export interface RotateSecretsManagerSecretParameters {
  /**
   * Client request token
   */
  readonly ClientRequestToken: string;
  /**
   * Whether the secret should be rotated immediately, rather than waiting until the next scheduled rotation window
   */
  readonly RotateImmediately?: boolean;
  /**
   * Lambda function used to rotate the secret
   */
  readonly RotationLambdaARN?: LambdaFunctionArn;
  /**
   * Rotation rules
   */
  readonly RotationRules?: SecretsManagerSecretRotationRules;
  /**
   * Secret ARN or name
   */
  readonly SecretId: SecretsManagerSecretArn | SecretsManagerSecretName;
}
