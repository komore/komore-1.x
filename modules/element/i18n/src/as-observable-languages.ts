import { isObservable, of } from '@komore/reactive';
import { browserLanguages } from '@komore/browser';

import { type Languages } from './languages';

/**
 * Creates an observable list of languages
 *
 * When no languages are provided, the browser languages are used.
 *
 * @param languages List or observable list of languages
 * @returns Observable list of languages
 * @private
 */
export function asObservableLanguages(languages?: Observable<Languages> | Languages): Observable<Languages> {
  if (languages === undefined) {
    return browserLanguages;
  }

  if (isObservable(languages)) {
    return languages;
  }

  return of(languages);
}
