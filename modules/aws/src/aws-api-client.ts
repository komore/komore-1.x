/**
 * AWS API client
 */
export interface AwsApiClient {
  <T>(operation: string, parameters: unknown): Observable<T>;
}
