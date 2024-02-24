import { type AwsAccountId } from '@komore/aws';

import { type S3HttpHeader } from './s3-http-header';

/**
 * Creates an S3 expected bucket owner HTTP header
 *
 * @param expectedBucketOwner Expected bucket owner
 * @returns S3 expected bucket owner HTTP header
 */
export function createS3ExpectedBucketOwnerHttpHeader(expectedBucketOwner: AwsAccountId): S3HttpHeader {
  return ['x-amz-expected-bucket-owner', expectedBucketOwner];
}
