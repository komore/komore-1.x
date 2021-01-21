import type { Observable } from 'rxjs';

/**
 * Script resource loader
 */
export interface ScriptResourceLoader {
  (resourceUrl: string): Observable<HTMLScriptElement>;
}
