import type { LambdaEventIdentity } from '../lambda-event-identity';

/**
 * S3 event record message bucket
 */
export interface S3EventRecordMessageBucket {
  readonly arn: `arn:aws:s3:${string}`;
  readonly name: string;
  readonly ownerIdentity: LambdaEventIdentity;
}
