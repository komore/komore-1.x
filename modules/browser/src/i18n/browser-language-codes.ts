import { each } from '@komore/collection';
import { asLanguageCode, type LanguageCode } from '@komore/i18n';
import { cache, defer, map, of, type Observable } from '@komore/reactive';
import { stringToSubstring } from '@komore/string';

/**
 * Browser language codes
 *
 * Emits the detected navigator languages as ISO 639-1 language codes
 */
export const browserLanguageCodes: Observable<ReadonlyArray<LanguageCode>> = defer(() => of(navigator.languages)).pipe(
  map(each(stringToSubstring({ end: 2 }))),
  map(each(asLanguageCode)),
  cache()
);
