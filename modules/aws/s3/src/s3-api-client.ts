/**
 * S3 API client
 */
export interface S3ApiClient {
  <T>(rootTag: string, operation: string, parameters?: string): Observable<T>;
}
