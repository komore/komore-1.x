import { asLanguageCode, type LanguageCode } from '@komore/i18n';
import { cache, defer, mapEach, of, type Observable } from '@komore/reactive';
import { stringToSubstring } from '@komore/string';

/**
 * Browser language codes
 *
 * Emits the detected navigator languages as ISO 639-1 language codes
 */
export const browserLanguageCodes: Observable<ReadonlyArray<LanguageCode>> = defer(() => of(navigator.languages)).pipe(
  mapEach(stringToSubstring({ end: 2 })),
  mapEach(asLanguageCode),
  cache()
);
