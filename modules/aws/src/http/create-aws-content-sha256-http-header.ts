import { type HttpHeader } from '@komore/http';

/**
 * Creates an x-amzn-content-sha256 HTTP header
 *
 * @param hashValue Hash value
 * @returns AWS content SHA-256 HTTP header
 */
export function createAwsContentSha256HttpHeader(hashValue: string): HttpHeader {
  return ['x-amz-content-sha256', hashValue];
}
