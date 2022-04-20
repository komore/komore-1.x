/**
 * Text analysis options
 */
export interface TextAnalysisOptions {
  /**
   * Whether to detect the language
   */
  readonly detectLanguage: boolean;
  /**
   * whether to detect the sentiment
   */
  readonly detectSentiment: boolean;
}
