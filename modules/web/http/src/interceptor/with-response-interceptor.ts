import { mergeMap } from '@komore/reactive';
import { createHttpClientRequest } from '../create-http-client-request';
import { type HttpClient } from '../http-client';
import { type HttpClientRequestOptions } from '../http-client-request-options';
import { type ResponseInterceptor } from './response-interceptor';

export function withResponseInterceptor<DefaultContextType>(
  httpClient: HttpClient<DefaultContextType>,
  responseInterceptor: ResponseInterceptor<DefaultContextType>
): HttpClient<DefaultContextType> {
  return <ContextType>(url: string | URL, options?: HttpClientRequestOptions<ContextType>) => {
    const request = createHttpClientRequest(url, options);
    return httpClient(url, options).pipe(mergeMap(response => responseInterceptor(response, request)));
  };
}
