import { type TranslateLanguageCode } from './code/translate-language-code';
import { type ListTranslateLanguagesNextToken } from './list-translate-langauges-next-token';

/**
 * List Translate languages parameters
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_ListLanguages.html#API_ListLanguages_RequestParameters ListLanguages Request Parameters}
 */
export interface ListTranslateLanguagesParameters {
  /**
   * Display language code
   */
  readonly DisplayLanguageCode?: TranslateLanguageCode;
  /**
   * Maximum number of results
   */
  readonly MaxResults?: number;
  /**
   * Next token
   */
  readonly NextToken?: ListTranslateLanguagesNextToken;
}
