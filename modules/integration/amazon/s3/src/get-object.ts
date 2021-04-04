import type { GetObjectCommandInput, S3Client } from '@aws-sdk/client-s3';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Retrieves an object from an S3 bucket
 * @param s3Client S3 client
 * @param commandInput `GetObject` command input
 * @returns Object
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html GetObject}
 */
export function getObject(s3Client: S3Client, commandInput: GetObjectCommandInput) {
  return sendCommand(s3Client, new GetObjectCommand(commandInput));
}
