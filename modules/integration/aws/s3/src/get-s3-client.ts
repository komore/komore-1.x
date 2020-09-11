import { S3Client } from '@aws-sdk/client-s3';

/**
 * Gets a default S3 client if one was not provided
 * @param s3Client S3 client
 * @returns S3 client
 */
export function getS3Client(s3Client: S3Client | undefined): S3Client {
  return s3Client || new S3Client({});
}
