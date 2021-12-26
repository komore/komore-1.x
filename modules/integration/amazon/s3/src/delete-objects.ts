import { DeleteObjectsCommand, type DeleteObjectsCommandInput, type S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Deletes objects from an S3 bucket
 * @param s3Client S3 client
 * @param commandInput `DeleteObjects` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html DeleteObjects}
 */
export function deleteObjects(s3Client: S3Client, commandInput: DeleteObjectsCommandInput) {
  // TODO: support > 1000 objects
  return sendCommand(s3Client, new DeleteObjectsCommand(commandInput));
}
