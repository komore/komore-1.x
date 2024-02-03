import { isObservable, of } from '@komore/reactive';

import { type LanguageCode } from './language-code';

/**
 * Creates an observable list of language codes
 *
 * @param languageCodes List or observable list of language codes
 * @returns Observable list of language codes
 * @private
 */
export function asObservableLanguageCodes(
  languageCodes: Observable<ReadonlyArray<LanguageCode>> | ReadonlyArray<LanguageCode>
): Observable<ReadonlyArray<LanguageCode>> {
  if (isObservable(languageCodes)) {
    return languageCodes;
  }

  return of(languageCodes);
}
