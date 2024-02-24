import { type S3HttpHeader } from './s3-http-header';

/**
 * Creates an S3 bypass governance retention HTTP header
 *
 * @returns S3 bypass governance retention HTTP header
 */
export function createS3BypassGovernanceRetentionHttpHeader(): S3HttpHeader {
  // TODO: check expected header value
  return ['x-amz-bypass-governance-retention', '1'];
}
