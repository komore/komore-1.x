/**
 * Git CLI client
 */
export interface GitCliClient {
  (commandParameters: ReadonlyArray<string>): Observable<string>;
}
