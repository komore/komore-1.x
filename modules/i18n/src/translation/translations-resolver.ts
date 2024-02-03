import { type LanguageCode } from '../language/language-code';
import { type Translations } from './translations';

/**
 * Translations resolver
 */
export interface TranslationsResolver {
  (languageCode: LanguageCode, namespace: string | undefined): Observable<Translations>;
}
