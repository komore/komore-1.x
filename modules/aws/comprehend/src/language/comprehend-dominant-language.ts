import { type ComprehendLanguageCode } from './comprehend-language-code';

/**
 * Comprehend dominant language
 *
 * @see {@link https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DominantLanguage.html DominantLanguage}
 */
export interface ComprehendDominantLanguage {
  /**
   * Language code
   */
  readonly LanguageCode: ComprehendLanguageCode;
  /**
   * Level of confidence
   */
  readonly Score: number;
}
