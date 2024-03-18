import { type TranslateTerminologyDataFormat } from './format/translate-terminology-data-format';

/**
 * Get Translate terminology parameters
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_GetTerminology.html#API_GetTerminology_RequestParameters GetTerminology Request Parameters}
 */
export interface GetTranslateTerminologyParameters {
  /**
   * Custom terminology name
   */
  readonly Name: string;
  /**
   * Data format
   */
  readonly TerminologyDataFormat: TranslateTerminologyDataFormat;
}
