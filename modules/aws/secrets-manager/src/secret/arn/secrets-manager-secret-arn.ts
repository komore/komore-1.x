import { type RegionalArn } from '@komore/aws';

import { type SecretsManagerSecretName } from '../name/secrets-manager-secret-name';

/**
 * Secrets Manager secret ARN
 */
export type SecretsManagerSecretArn = RegionalArn<'secretsmanager', `secret:${SecretsManagerSecretName}-${string}`>;
