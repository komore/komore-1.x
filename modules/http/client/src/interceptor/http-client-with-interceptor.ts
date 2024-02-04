import { identity } from '@komore/functional';
import { asObservable, mergeMap } from '@komore/reactive';

import { type HttpClient } from '../http-client';
import { type HttpClientResponse } from '../response/http-client-response';
import { type HttpClientRequest } from '../request/http-client-request';
import { type HttpClientInterceptor } from './http-client-interceptor';

export function httpClientWithInterceptor(
  interceptor: Partial<HttpClientInterceptor>
): (httpClient: HttpClient) => HttpClient {
  const { request: projectRequest, response: projectResponse } = interceptor;
  const interceptRequest =
    projectRequest !== undefined
      ? (request: HttpClientRequest): Observable<HttpClientRequest> => asObservable(projectRequest(request))
      : undefined;
  const interceptResponse =
    projectResponse !== undefined
      ? (response: HttpClientResponse): Observable<HttpClientResponse> => asObservable(projectResponse(response))
      : undefined;

  if (interceptRequest !== undefined && interceptResponse !== undefined) {
    return httpClient => request => interceptRequest(request).pipe(mergeMap(httpClient), mergeMap(interceptResponse));
  } else if (interceptRequest !== undefined) {
    return httpClient => request => interceptRequest(request).pipe(mergeMap(httpClient));
  } else if (interceptResponse !== undefined) {
    return httpClient => request => httpClient(request).pipe(mergeMap(interceptResponse));
  }

  return identity;
}
