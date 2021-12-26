import { type Observable } from '@komore/reactive';

/**
 * Script resource loader
 */
export interface ScriptResourceLoader {
  (resourceUrl: string): Observable<HTMLScriptElement>;
}
