import { type Observable } from '@komore/reactive';

/**
 * Style resource loader
 */
export interface StyleResourceLoader {
  (resourceUrl: string): Observable<HTMLStyleElement>;
}
