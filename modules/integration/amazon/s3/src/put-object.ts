import { PutObjectCommand, PutObjectCommandInput, S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-aws';

/**
 * Puts an object to an S3 bucket
 * @param commandInput `PutObject` command input
 * @param s3Client S3 client
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html PutObject}
 */
export const putObject = (s3Client: S3Client, commandInput: PutObjectCommandInput) =>
  sendCommand(s3Client, new PutObjectCommand(commandInput));
