import { PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';
import { sendCommandWith } from '@komore/integration/aws';
import { Observable, UnaryFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { getS3Client } from './get-s3-client';

/**
 * Puts an object to an S3 bucket with a specific client
 * @param commandInput Put-Object command input
 * @param s3Client S3 client
 * @returns Observable Put-Object command output
 */
export function putObjectWith(
  s3Client?: S3Client
): UnaryFunction<Observable<PutObjectCommandInput>, Observable<PutObjectCommandOutput>> {
  return pipe(
    map(commandInput => new PutObjectCommand(commandInput)),
    sendCommandWith(getS3Client(s3Client))
  );
}
