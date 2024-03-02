import { type Arn } from '@komore/aws';

/**
 * S3 bucket ARN
 */
export type S3BucketArn = Arn<'s3', `::${string}`>;
