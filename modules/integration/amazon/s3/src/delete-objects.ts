import type { DeleteObjectsCommandInput, S3Client } from '@aws-sdk/client-s3';
import { DeleteObjectsCommand } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Deletes objects from an S3 bucket
 * @param s3Client S3 client
 * @param commandInput `DeleteObject` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html DeleteObjects}
 */
export function deleteObjects(s3Client: S3Client, commandInput: DeleteObjectsCommandInput) {
  return sendCommand(s3Client, new DeleteObjectsCommand(commandInput));
}

// TODO: support > 1000 objects
