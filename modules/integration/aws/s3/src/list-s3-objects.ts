import { ListObjectsV2Command, type ListObjectsV2CommandInput, type S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-aws';

/**
 * Lists objects in an S3 bucket
 * @param commandInput ListObjectsV2 command input
 * @param s3Client S3 client
 * @returns List of objects
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html ListObjectsV2}
 */
export const listS3Objects = (s3Client: S3Client, commandInput: ListObjectsV2CommandInput) =>
  sendCommand(s3Client, new ListObjectsV2Command(commandInput));

// TODO: remove 1k objects limit
