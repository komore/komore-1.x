import { type Observable } from '@komore/reactive';
import { type HttpClientRequest } from '../http-client-request';

/**
 * Request interceptor
 */
export interface RequestInterceptor<DefaultContextType = undefined> {
  <ContextType = DefaultContextType>(request: HttpClientRequest<ContextType>): Observable<
    HttpClientRequest<ContextType>
  >;
}
