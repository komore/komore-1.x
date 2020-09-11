import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
  S3Client
} from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration/aws';
import { Observable } from 'rxjs';
import { getS3Client } from './get-s3-client';

/**
 * Lists objects in an S3 bucket
 * @param commandInput List-Objects-v2 command input
 * @param s3Client S3 client
 * @returns Observable List-Objects-v2 command output
 */
export function listObjects(
  commandInput: ListObjectsV2CommandInput,
  s3Client?: S3Client
): Observable<ListObjectsV2CommandOutput> {
  return sendCommand(new ListObjectsV2Command(commandInput), getS3Client(s3Client));
}
