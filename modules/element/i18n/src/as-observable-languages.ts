import type { Observable } from '@komore/reactive';
import { isObservable, of } from '@komore/reactive';
import { BROWSER_LANGUAGES } from './browser-languages';
import type { Languages } from './languages';

/**
 * Creates an observable list of languages
 *
 * When no languages are provided, the browser languages are used.
 * @param languages List or observable list of languages
 * @returns Observable list of languages
 * @internal
 */
export function asObservableLanguages(languages?: Observable<Languages> | Languages): Observable<Languages> {
  if (languages === undefined) {
    return BROWSER_LANGUAGES;
  }

  if (isObservable(languages)) {
    return languages;
  }

  return of(languages);
}
