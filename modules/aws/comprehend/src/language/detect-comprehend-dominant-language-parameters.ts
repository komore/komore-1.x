/**
 * Detect Comprehend dominant language parameters
 *
 * @see {@link https://docs.aws.amazon.com/comprehend/latest/APIReference/API_DetectDominantLanguage.html#API_DetectDominantLanguage_RequestParameters DetectDominantLanguage Request Parameters}
 */
export interface DetectComprehendDominantLanguageParameters {
  /**
   * Text within which to detect the dominant language
   */
  readonly Text: string;
}
