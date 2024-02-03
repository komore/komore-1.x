/**
 * Style resource loader
 */
export interface StyleResourceLoader {
  (resourceUrl: string): Observable<HTMLStyleElement>;
}
