/**
 * Notion API client
 */
export interface NotionApiClient {
  <ResponseType>(method: 'DELETE' | 'GET', resourcePath: string): Observable<ResponseType>;
  <ResponseType>(method: 'PATCH' | 'POST' | 'PUT', resourcePath: string, payload: unknown): Observable<ResponseType>;
}
