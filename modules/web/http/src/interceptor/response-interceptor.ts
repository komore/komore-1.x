import { type Observable } from '@komore/reactive';
import { type HttpClientRequest } from '../http-client-request';

/**
 * Response interceptor
 */
export interface ResponseInterceptor<DefaultContextType = undefined> {
  <ContextType = DefaultContextType>(response: Response, request: HttpClientRequest<ContextType>): Observable<Response>;
}
