/**
 * Detected text language
 */
export interface DetectedTextLanguage {
  /**
   * Confidence level between 0 and 1
   */
  readonly confidenceLevel: number;
  /**
   * Language code based on RFC 5646
   */
  readonly languageCode: string;
}
