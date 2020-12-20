import { DeleteObjectsCommand, DeleteObjectsCommandInput, S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-aws';

/**
 * Deletes objects from an S3 bucket
 * @param s3Client S3 client
 * @param commandInput `DeleteObject` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html DeleteObjects}
 */
export const deleteObjects = (s3Client: S3Client, commandInput: DeleteObjectsCommandInput) =>
  sendCommand(s3Client, new DeleteObjectsCommand(commandInput));

// TODO: support > 1000 objects
