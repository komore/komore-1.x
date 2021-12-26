import { type S3Client } from '@aws-sdk/client-s3';
import { withAmazonClient } from '@komore/integration-amazon';
import { createS3Client } from '@komore/integration/s3';

/**
 * Adds an S3 client to a message
 * @param s3Client S3 client
 * @returns Operator function that turns a message into a message with an S3 client
 */
export function withS3Client(s3Client?: S3Client) {
  return withAmazonClient('s3', s3Client ?? createS3Client());
}
