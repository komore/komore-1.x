import type { S3Client } from '@aws-sdk/client-s3';
import { withAwsClient } from '@komore/integration-amazon';
import { createS3Client } from '../create-s3-client';

/**
 * Adds an S3 client to a message
 * @param s3Client S3 client
 * @returns Operator function that turns a message into a message with an S3 client
 */
export const withS3Client = (s3Client?: S3Client) => withAwsClient('s3', s3Client ?? createS3Client());
