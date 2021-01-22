import type { ListObjectsV2CommandInput, S3Client } from '@aws-sdk/client-s3';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Lists objects in an S3 bucket
 * @param commandInput ListObjectsV2 command input
 * @param s3Client S3 client
 * @returns List of objects
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html ListObjectsV2}
 */
export const listObjects = (s3Client: S3Client, commandInput: ListObjectsV2CommandInput) =>
  sendCommand(s3Client, new ListObjectsV2Command(commandInput));

// TODO: remove 1k objects limit
