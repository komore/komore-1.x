import { type S3HttpHeader } from './s3-http-header';

/**
 * Creates an S3 MFA HTTP header
 *
 * @param deviceSerialNumber Device serial number
 * @param value Value
 * @returns S3 MFA HTTP header
 */
export function createS3MfaHttpHeader(deviceSerialNumber: string, value: string): S3HttpHeader {
  const headerValue = `${deviceSerialNumber} ${value}`;
  return ['x-amz-mfa', headerValue];
}
