/**
 * Script resource loader
 */
export interface ScriptResourceLoader {
  (resourceUrl: string): Observable<HTMLScriptElement>;
}
