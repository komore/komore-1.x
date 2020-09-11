import { GetObjectCommand, GetObjectCommandInput, GetObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';
import { sendCommandWith } from '@komore/integration/aws';
import { Observable, UnaryFunction, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { getS3Client } from './get-s3-client';

/**
 * Gets an object from an S3 bucket with a specific client
 * @param commandInput Get-Object command input
 * @param s3Client S3 client
 * @returns Observable Get-Object command output
 */
export function getObjectWith(
  s3Client?: S3Client
): UnaryFunction<Observable<GetObjectCommandInput>, Observable<GetObjectCommandOutput>> {
  return pipe(
    map(commandInput => new GetObjectCommand(commandInput)),
    sendCommandWith(getS3Client(s3Client))
  );
}
