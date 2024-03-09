import { type ComprehendLanguageCode } from '../language/comprehend-language-code';

/**
 * Detect Comprehend sentiment parameters
 *
 * @see {@link https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectSentiment.html#API_DetectSentiment_RequestParameters DetectSentiment Request Parameters}
 */
export interface DetectComprehendSentimentParameters {
  /**
   * Language code
   */
  readonly LanguageCode: ComprehendLanguageCode;
  /**
   * Text
   */
  readonly Text: string;
}
