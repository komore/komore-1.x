import { type HttpHeaderName } from './name/http-header-name';

/**
 * HTTP header
 */
export type HttpHeader = readonly [headerName: HttpHeaderName | (string & {}), headerValue: string];
