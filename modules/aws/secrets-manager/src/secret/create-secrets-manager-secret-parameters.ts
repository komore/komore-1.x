import { type KmsAliasName, type KmsKeyArn, type KmsKeyId } from '@komore/aws/kms';

import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';
import { type SecretsManagerSecretReplicaRegion } from './replication/secrets-manager-secret-replica-region';
import { type SecretsManagerTag } from '../tag/secrets-manager-tag';

/**
 * Create Secrets Manager secret parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#API_CreateSecret_RequestParameters CreateSecret Request Parameters}
 */
export interface CreateSecretsManagerSecretParameters {
  /**
   * List of regions and KMS keys where secrets should be replicated
   */
  readonly AddReplicaRegions?: ReadonlyArray<SecretsManagerSecretReplicaRegion>;
  /**
   * Client request token
   */
  readonly ClientRequestToken: string;
  /**
   * Secret description
   */
  readonly Description?: string;
  /**
   * Whether any secret with the same name should be overridden
   *
   * @default false
   */
  readonly ForceOverwriteReplicaSecret?: boolean;
  /**
   * ARN, identifier or alias for the KMS key used to encrypt the secret value
   */
  readonly KmsKeyId?: KmsKeyArn | KmsKeyId | KmsAliasName;
  /**
   * Secret name
   */
  readonly Name: SecretsManagerSecretName;
  /**
   * List of tags
   */
  readonly Tags?: ReadonlyArray<SecretsManagerTag>;
}
