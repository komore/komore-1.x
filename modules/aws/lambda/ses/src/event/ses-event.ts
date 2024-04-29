import { type SesEventRecord } from './ses-event-record';

/**
 * SES event
 */
export interface SesEvent {
  /**
   * List of records
   */
  readonly Records: ReadonlyArray<SesEventRecord>;
}
