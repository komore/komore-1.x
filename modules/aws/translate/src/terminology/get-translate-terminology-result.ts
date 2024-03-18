import { type TranslateTerminologyDataLocation } from './translate-terminology-data-location';
import { type TranslateTerminologyProperties } from './translate-terminology-properties';

/**
 * Get Translate terminology result
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_GetTerminology.html#API_GetTerminology_ResponseElements GetTerminology Response Elements}
 */
export interface GetTranslateTerminologyResult {
  /**
   * Auxiliary data location
   */
  readonly AuxiliaryDataLocation: TranslateTerminologyDataLocation;
  /**
   * Terminology data location
   */
  readonly TerminologyDataLocation: TranslateTerminologyDataLocation;
  /**
   * Terminology properties
   */
  readonly TerminologyProperties: TranslateTerminologyProperties;
}
