/**
 * OpenTofu CLI client
 */
export interface OpenTofuCliClient {
  (commandParameters: ReadonlyArray<string>): Observable<string>;
}
