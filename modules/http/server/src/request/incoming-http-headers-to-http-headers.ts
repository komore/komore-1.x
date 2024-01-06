import { type IncomingHttpHeaders } from 'node:http';

import { validateHttpHeaderName, type HttpHeader } from '@komore/http';
import { isString } from '@komore/string';

export function incomingHttpHeadersToHttpHeaders(incomingHttpHeaders: IncomingHttpHeaders): ReadonlyArray<HttpHeader> {
  return Object.entries(incomingHttpHeaders).map(([headerName, headerValue]) => {
    validateHttpHeaderName(headerName);
    const value = isString(headerValue) ? headerValue : headerValue?.[0] ?? '';
    return [headerName, value];
  });
}
