import { type S3HttpHeader } from './s3-http-header';

/**
 * Creates an S3 request payer HTTP header
 *
 * @returns S3 request payer HTTP header
 */
export function createS3RequestPayerHttpHeader(): S3HttpHeader {
  return ['x-amz-request-payer', 'requester'];
}
