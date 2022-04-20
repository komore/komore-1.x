import {
  DeleteObjectCommand,
  type DeleteObjectCommandInput,
  type DeleteObjectCommandOutput,
  type S3Client,
} from '@aws-sdk/client-s3';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Deletes an object from an S3 bucket
 *
 * @param s3Client S3 client
 * @param commandInput `DeleteObject` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html DeleteObject}
 */
export function deleteObject(
  s3Client: S3Client,
  commandInput: DeleteObjectCommandInput
): Observable<DeleteObjectCommandOutput> {
  return sendAwsCommand(s3Client, new DeleteObjectCommand(commandInput));
}
