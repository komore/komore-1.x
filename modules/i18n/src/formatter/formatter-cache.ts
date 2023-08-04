import { type IntlMessageFormat } from 'intl-messageformat';

import { type Observable } from '@komore/reactive';

import { type LanguageCode } from '../language/language-code';

/**
 * Formatter cache
 */
export interface FormatterCache {
  (languageCode: LanguageCode, namespace: string | undefined, key: string): Observable<IntlMessageFormat>;
}
