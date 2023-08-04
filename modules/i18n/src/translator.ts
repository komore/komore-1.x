import { type Observable } from '@komore/reactive';

import { type I18nMessage } from './i18n-message';
import { type TranslationOptions } from './translation/translation-options';

/**
 * Translator
 */
export interface Translator {
  (message: I18nMessage, options?: TranslationOptions): Observable<string>;
}
