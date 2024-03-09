import { type Arn, type AwsAccountId } from '@komore/aws';

import { type KmsAliasName } from '../name/kms-alias-name';

/**
 * KMS alias ARN
 */
export type KmsAliasArn = Arn<`${AwsAccountId}:${KmsAliasName}`>;
