import { DeleteObjectCommand, type DeleteObjectCommandInput, type S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Deletes an object from an S3 bucket
 * @param s3Client S3 client
 * @param commandInput `DeleteObject` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html DeleteObject}
 */
export const deleteObject = (s3Client: S3Client, commandInput: DeleteObjectCommandInput) =>
  sendCommand(s3Client, new DeleteObjectCommand(commandInput));
