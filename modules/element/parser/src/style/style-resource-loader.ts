import type { Observable } from 'rxjs';

/**
 * Style resource loader
 */
export interface StyleResourceLoader {
  (resourceUrl: string): Observable<HTMLStyleElement>;
}
