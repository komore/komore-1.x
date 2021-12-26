import { type ses } from './ses';
import { type SesEventRecordMessage } from './ses-event-record-message';

/**
 * SES event record
 */
export interface SesEventRecord {
  readonly eventSource: typeof ses;
  readonly eventVersion: '1.0';
  readonly ses: SesEventRecordMessage;
}
