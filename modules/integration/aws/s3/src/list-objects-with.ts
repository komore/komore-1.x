import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
  S3Client
} from '@aws-sdk/client-s3';
import { sendCommandWith } from '@komore/integration/aws';
import { Observable, UnaryFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { getS3Client } from './get-s3-client';

/**
 * Lists objects in an S3 bucket with a specific client
 * @param commandInput List-Objects-v2 command input
 * @param s3Client S3 client
 * @returns Observable List-Objects-v2 command output
 */
export function listObjectsWith(
  s3Client?: S3Client
): UnaryFunction<Observable<ListObjectsV2CommandInput>, Observable<ListObjectsV2CommandOutput>> {
  return pipe(
    map(commandInput => new ListObjectsV2Command(commandInput)),
    sendCommandWith(getS3Client(s3Client))
  );
}
