import { mergeMap } from '@komore/reactive';
import { createHttpClientRequest } from '../create-http-client-request';
import { type HttpClient } from '../http-client';
import { type HttpClientRequestOptions } from '../http-client-request-options';
import { type RequestInterceptor } from './request-interceptor';

export function withRequestInterceptor<DefaultContextType>(
  httpClient: HttpClient<DefaultContextType>,
  requestInterceptor: RequestInterceptor<DefaultContextType>
): HttpClient<DefaultContextType> {
  return <ContextType>(url: string | URL, options?: HttpClientRequestOptions<ContextType>) => {
    const requestForInterception = createHttpClientRequest(url, options);
    return requestInterceptor(requestForInterception).pipe(
      mergeMap(request => httpClient(request.url, request.options))
    );
  };
}
