import { type RegionalArn } from '@komore/aws';

import { type KmsAliasName } from '../name/kms-alias-name';

/**
 * KMS alias ARN
 */
export type KmsAliasArn = RegionalArn<'kms', `alias/${KmsAliasName}`>;
