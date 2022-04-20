import { type DetectedTextLanguage } from './detected-text-language';

/**
 * Text analysis result
 */
export interface TextAnalysisResult {
  /**
   * Detected text languages, ordered from the most confident to the least confident
   */
  readonly detectedLanguages: ReadonlyArray<DetectedTextLanguage>;
}
