/**
 * Poetry CLI client
 */
export interface PoetryCliClient {
  (commandParameters: ReadonlyArray<string>): Observable<string>;
}
