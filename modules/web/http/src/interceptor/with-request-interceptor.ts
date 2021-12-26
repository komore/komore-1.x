import { mergeMap, type Observable } from '@komore/reactive';
import { HttpClient } from '../http-client';

export function withRequestInterceptor<ContextType>(
  httpClient: HttpClient<ContextType>,
  interceptor: (request: Request, context: ContextType) => Observable<Request>
): HttpClient<ContextType> {
  return (request, context) => {
    const r = request instanceof URL || typeof request === 'string' ? new Request(request) : request;
    return interceptor(request, context).pipe(mergeMap(request => httpClient(request, context)));
  };
}
