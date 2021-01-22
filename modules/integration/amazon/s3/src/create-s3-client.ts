import type { S3ClientConfig } from '@aws-sdk/client-s3';
import { S3Client } from '@aws-sdk/client-s3';

/**
 * Creates an S3 client
 * @param configuration Configuration
 * @returns S3 client
 */
export function createS3Client(configuration?: S3ClientConfig): S3Client {
  return new S3Client(configuration ?? {});
}
