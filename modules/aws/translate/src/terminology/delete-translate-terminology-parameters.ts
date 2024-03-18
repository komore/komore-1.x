import { type TranslateTerminologyName } from './name/translate-terminology-name';

/**
 * Delete Translate terminology parameters
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteTerminology.html#API_DeleteTerminology_RequestParameters DeleteTerminology Request Parameters}
 */
export interface DeleteTranslateTerminologyParameters {
  /**
   * Name
   */
  readonly Name: TranslateTerminologyName;
}
