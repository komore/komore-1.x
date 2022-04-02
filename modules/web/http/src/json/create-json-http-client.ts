import { mergeMap, type Observable } from '@komore/reactive';
import { createDefaultHttpClient } from '../create-default-http-client';
import { type HttpClientOptions } from '../http-client-options';
import { responseToJson } from '../response-to-json';
import { type JsonHttpClient } from './json-http-client';
import { type JsonHttpClientRequestOptions } from './json-http-client-request-options';

/**
 * Creates a JSON HTTP client
 * @param options HTTP client options
 * @returns JSON HTTP client
 */
export function createJsonHttpClient<DefaultContextType = undefined>(
  options?: HttpClientOptions
): JsonHttpClient<DefaultContextType> {
  const httpClient = createDefaultHttpClient(options);

  return <T, ContextType = DefaultContextType>(
    url: string | URL,
    requestOptions?: JsonHttpClientRequestOptions<T, ContextType>
  ): Observable<T> => {
    const body = requestOptions?.body ?? undefined;
    const jsonRequestOptions = {
      ...requestOptions,
      body: body !== undefined ? JSON.stringify(body) : body,
      headers: addJsonHeaders(body, requestOptions?.headers),
    };

    return httpClient(url, jsonRequestOptions).pipe(mergeMap(responseToJson<T>(requestOptions?.validator)));
  };
}

function addJsonHeaders(body: BodyInit | undefined, headers: HeadersInit | undefined): HeadersInit {
  const updatedHeaders = new Headers(headers);

  updatedHeaders.set('accept', 'application/json');
  if (body) {
    updatedHeaders.set('content-type', 'application/json');
  }

  return updatedHeaders;
}
