import { type HttpClientRequest } from '../request/http-client-request';
import { type HttpClientResponse } from '../response/http-client-response';

/**
 * HTTP client interceptor
 */
export interface HttpClientInterceptor {
  readonly request: (httpClientRequest: HttpClientRequest) => HttpClientRequest | Observable<HttpClientRequest>;
  readonly response: (httpClientResponse: HttpClientResponse) => HttpClientResponse | Observable<HttpClientResponse>;
}
