import { type HttpClientRequest } from './http-client-request';
import { type HttpClientRequestOptions } from './http-client-request-options';
import { normalizeUrl } from './normalize-url';

export function createHttpClientRequest<ContextType>(
  url: string | URL,
  options?: HttpClientRequestOptions<ContextType>
): HttpClientRequest<ContextType> {
  return {
    url: normalizeUrl(url),
    options
  };
}
