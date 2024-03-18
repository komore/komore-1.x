import { type TranslateLanguageCode } from './code/translate-language-code';
import { type ListTranslateLanguagesNextToken } from './list-translate-langauges-next-token';
import { type TranslateLanguage } from './translate-language';

/**
 * List Translate languages result
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_ListLanguages.html#API_ListLanguages_ResponseElements}
 */
export interface ListTranslateLanguagesResult {
  /**
   * Display language code
   */
  readonly DisplayLanguageCode: TranslateLanguageCode;
  /**
   * List of languages
   */
  readonly Languages: ReadonlyArray<TranslateLanguage>;
  /**
   * Next token
   */
  readonly NextToken?: ListTranslateLanguagesNextToken;
}
