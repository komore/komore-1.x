/**
 * pnpm command-line interface client
 */
export interface PnpmCliClient {
  (commandParameters: ReadonlyArray<string>): Observable<string>;
}
