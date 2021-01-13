import type { Observable } from 'rxjs';
import { isObservable, of } from 'rxjs';
import { BROWSER_LANGUAGES } from './browser-languages';
import { Languages } from './languages';

/**
 * Builds an observable list of languages
 * @param languages Languages
 */
export function asObservableLanguages(languages: Observable<Languages> | Languages | undefined): Observable<Languages> {
  if (languages === undefined) {
    return BROWSER_LANGUAGES;
  }

  if (isObservable(languages)) {
    return languages;
  }

  return of(languages);
}
