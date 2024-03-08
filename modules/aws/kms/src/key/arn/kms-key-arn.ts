import { type Arn, type AwsAccountId } from '@komore/aws';

import { type KmsKeyId } from '../id/kms-key-id';

/**
 * KMS key ARN
 */
export type KmsKeyArn = Arn<`${AwsAccountId}:key/${KmsKeyId}`>;
