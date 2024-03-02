import { type AwsAccountId } from '@komore/aws';
import { type LambdaEventIdentity } from '@komore/aws/lambda';
import { type S3BucketArn, type S3BucketName } from '@komore/aws/s3';

/**
 * S3 event record message bucket
 */
export interface S3EventRecordMessageBucket {
  /**
   * Bucket ARN
   */
  readonly arn: S3BucketArn;
  /**
   * Bucket name
   */
  readonly name: S3BucketName;
  /**
   * Owner identity
   */
  readonly ownerIdentity: LambdaEventIdentity<AwsAccountId>; // TODO: verify it is the account id
}
