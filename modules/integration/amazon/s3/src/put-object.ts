import type { PutObjectCommandInput, S3Client } from '@aws-sdk/client-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Puts an object to an S3 bucket
 * @param commandInput `PutObject` command input
 * @param s3Client S3 client
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html PutObject}
 */
export function putObject(s3Client: S3Client, commandInput: PutObjectCommandInput) {
  return sendCommand(s3Client, new PutObjectCommand(commandInput));
}
