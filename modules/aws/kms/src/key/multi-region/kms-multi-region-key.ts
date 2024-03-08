import { type AwsRegion } from '@komore/aws';

import { type KmsKeyArn } from '../arn/kms-key-arn';

/**
 * KMS multi-region key
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_MultiRegionKey.html MultiRegionKey}
 */
export interface KmsMultiRegionKey {
  /**
   * Key ARN
   */
  readonly Arn: KmsKeyArn;
  /**
   * AWS region
   */
  readonly Region: AwsRegion;
}
