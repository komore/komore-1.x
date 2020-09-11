import { GetObjectCommand, GetObjectCommandInput, GetObjectCommandOutput, S3Client } from '@aws-sdk/client-s3';
import { sendCommand } from '@komore/integration/aws';
import { Observable } from 'rxjs';
import { getS3Client } from './get-s3-client';

/**
 * Gets an object from an S3 bucket
 * @param commandInput Get-Object command input
 * @param s3Client S3 client
 * @returns Observable Get-Object command output
 */
export function getObject(
  commandInput: GetObjectCommandInput,
  s3Client?: S3Client
): Observable<GetObjectCommandOutput> {
  return sendCommand(new GetObjectCommand(commandInput), getS3Client(s3Client));
}
