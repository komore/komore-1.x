import { PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration/aws';
import { Observable } from 'rxjs';
import { getS3Client } from './get-s3-client';

/**
 * Puts an object to an S3 bucket
 * @param commandInput Put-Object command input
 * @param s3Client S3 client
 * @returns Observable Put-Object command output
 */
export function putObject(
  commandInput: PutObjectCommandInput,
  s3Client?: S3Client
): Observable<PutObjectCommandOutput> {
  return sendCommand(new PutObjectCommand(commandInput), getS3Client(s3Client));
}
