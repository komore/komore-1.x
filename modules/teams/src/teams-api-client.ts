import { type Observable } from '@komore/reactive';

/**
 * Teams API client
 */
export interface TeamsApiClient {
  <ResponseType>(method: 'GET', resourcePath: `teams/${string}`): Observable<ResponseType>;
}
