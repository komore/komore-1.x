import {
  ListObjectsV2Command,
  type ListObjectsV2CommandInput,
  type ListObjectsV2CommandOutput,
  type S3Client,
} from '@aws-sdk/client-s3';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Lists objects in an S3 bucket
 *
 * @param commandInput ListObjectsV2 command input
 * @param s3Client S3 client
 * @returns List of objects
 * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html ListObjectsV2}
 */
export function listS3Objects(
  s3Client: S3Client,
  commandInput: ListObjectsV2CommandInput
): Observable<ListObjectsV2CommandOutput> {
  return sendAwsCommand(s3Client, new ListObjectsV2Command(commandInput));
}

// TODO: remove 1k objects limit
