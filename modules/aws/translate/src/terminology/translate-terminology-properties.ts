import { type DateTimeString } from '@komore/temporal';
import { type TranslateTerminologyDirectionality } from './directionality/translate-terminology-directionality';
import { type TranslateTerminologyDataFormat } from './format/translate-terminology-data-format';

/**
 * Translate terminology properties
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TerminologyProperties.html TerminologyProperties}
 */
export interface TranslateTerminologyProperties {
  /**
   * ARN
   */
  readonly Arn: string; // TODO: typed
  /**
   * Creation time
   */
  readonly CreatedAt: DateTimeString;
  /**
   * Description
   */
  readonly Description: string;
  /**
   * Directionality
   */
  readonly Directionality: TranslateTerminologyDirectionality;
  readonly EncryptionKey: unknown; // TODO
  readonly Format: TranslateTerminologyDataFormat;
  readonly LastUpdatedAt: DateTimeString;
  readonly Message: string;
  readonly Name: string;
  readonly SizeBytes: number;
  readonly SkippedTermCount: number;
  /**
   * Language code for the source text
   */
  readonly SourceLanguageCode: string; // TODO: typed?
  /**
   * List of available target languages
   */
  readonly TargetLanguageCodes: ReadonlyArray<string>; // TODO: typed?
  /**
   * Number of terms
   */
  readonly TermCount: number;
}
