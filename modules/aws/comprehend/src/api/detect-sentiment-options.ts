import { type SupportedComprehendLanguage } from './supported-comprehend-language';

/**
 * Detect sentiment options
 */
export interface DetectSentimentOptions {
  /**
   * Text language
   */
  readonly language: SupportedComprehendLanguage;
  /**
   * Text
   */
  readonly text: string;
}
