import { type HttpHeader } from '@komore/http';

import { type s3ResponseElementByHeaderName } from './s3-response-element-by-header-name';
import { type S3HttpHeaderResponseElements } from './s3-http-header-response-elements';

export function httpHeadersToS3ResponseElements(
  ...httpHeaderNames: ReadonlyArray<keyof typeof s3ResponseElementByHeaderName>
): (
  responseElements: Partial<S3HttpHeaderResponseElements>,
  httpHeader: HttpHeader
) => Partial<S3HttpHeaderResponseElements> {
  const names: ReadonlySet<string> = new Set(httpHeaderNames);
  return (responseElements, [headerName, _headerValue]) => {
    if (!names.has(headerName)) {
      return responseElements;
    }

    // TODO

    return responseElements;
  };
}
