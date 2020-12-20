import { S3Client } from '@aws-sdk/client-s3';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds an S3 client to a message
 * @param s3Client S3 client
 * @returns Operator function that turns a message into a message with an S3 client
 */
export const withS3Client = (s3Client?: S3Client) => withAwsClient('s3', s3Client ?? new S3Client({}));
