import { type TranslateTerminologyName } from './name/translate-terminology-name';
import { type TranslateTerminologyTerm } from './translate-terminology-term';

/**
 * Applied translate terminology
 */
export interface AppliedTranslateTerminology {
  /**
   * Name
   */
  readonly Name: TranslateTerminologyName;
  /**
   * List of terms
   */
  readonly Terms: ReadonlyArray<TranslateTerminologyTerm>;
}
