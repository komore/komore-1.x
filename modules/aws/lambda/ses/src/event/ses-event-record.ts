import { type ses } from './ses';
import { type SesEventRecordMessage } from './ses-event-record-message';

/**
 * SES event record
 */
export interface SesEventRecord {
  /**
   * Event source
   */
  readonly eventSource: typeof ses;
  /**
   * Event version
   */
  readonly eventVersion: '1.0';
  /**
   * Event record message
   */
  readonly ses: SesEventRecordMessage;
}
