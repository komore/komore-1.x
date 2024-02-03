/**
 * eToro API client
 */
export interface EToroApiClient {
  <T>(type: 'etoro' | 'static', method: 'GET', resourcePath: string): Observable<T>;
}
