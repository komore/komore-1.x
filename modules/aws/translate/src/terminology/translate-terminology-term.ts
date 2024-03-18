/**
 * Translate terminology term
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_Term.html Term}
 */
export interface TranslateTerminologyTerm {
  /**
   * Source text
   */
  readonly SourceText: string;
  /**
   * Target text
   */
  readonly TargetText: string;
}
