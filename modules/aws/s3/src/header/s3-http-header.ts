import { type S3HttpHeaderName } from './name/s3-http-header-name';

/**
 * S3 HTTP header
 */
export type S3HttpHeader = readonly [headerName: S3HttpHeaderName, headerValue: string];
