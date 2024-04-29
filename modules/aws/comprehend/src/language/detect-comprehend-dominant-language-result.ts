import { type ComprehendDominantLanguage } from './comprehend-dominant-language';

/**
 * Detect Comprehend dominant language result
 *
 * @see {@link https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectDominantLanguage.html#API_DetectDominantLanguage_ResponseElements DetectDominantLanguage Response Elements}
 */
export interface DetectComprehendDominantLanguageResult {
  /**
   * List of detected languages in the input text
   */
  readonly Languages: ReadonlyArray<ComprehendDominantLanguage>;
}
