/**
 * Microsoft Graph API client
 */
export interface MsGraphApiClient {
  <ResponseType>(method: 'GET', resourcePath: string): Observable<ResponseType>;
  (method: 'DELETE', resourcePath: string): Observable<void>;
  <ResponseType>(method: 'PATCH' | 'POST' | 'PUT', resourcePath: string, payload: unknown): Observable<ResponseType>;
}
