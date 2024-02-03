/**
 * SendGrid API client
 *
 * @private
 */
export interface SendGridApiClient {
  <ResponseType>(method: 'DELETE' | 'GET', path: string): Observable<ResponseType>;
  <ResponseType>(method: 'POST' | 'PUT', path: string, payload: unknown): Observable<ResponseType>;
}
