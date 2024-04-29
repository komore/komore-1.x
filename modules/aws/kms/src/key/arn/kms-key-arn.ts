import { type RegionalArn } from '@komore/aws';

import { type KmsKeyId } from '../id/kms-key-id';

/**
 * KMS key ARN
 */
export type KmsKeyArn = RegionalArn<`key/${KmsKeyId}`>;
