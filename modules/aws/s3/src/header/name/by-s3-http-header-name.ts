import { type HttpHeader } from '@komore/http';
import { type S3HttpHeaderName } from './s3-http-header-name';

/**
 * Creates a function that tests whether an HTTP header matches a specific S3 HTTP header name
 *
 * @param headerName S3 HTTP header name
 * @returns Function that tests whether an HTTP header matches a specific S3 HTTP header name
 */
export function byS3HttpHeaderName(headerName: S3HttpHeaderName): (httpHeader: HttpHeader) => boolean {
  return ([name]) => name === headerName;
}
