import { each } from '@komore/collection';
import { asLanguageCode, type LanguageCode } from '@komore/i18n';
import { cache, map, type Observable } from '@komore/reactive';
import { stringToSubstring } from '@komore/string';

import { browserLanguages } from './browser-languages';

/**
 * Browser language codes
 *
 * Emits the detected navigator languages as ISO 639-1 language codes
 */
export const browserLanguageCodes: Observable<ReadonlyArray<LanguageCode>> = browserLanguages.pipe(
  map(each(stringToSubstring({ end: 2 }))),
  map(each(asLanguageCode)),
  cache()
);
