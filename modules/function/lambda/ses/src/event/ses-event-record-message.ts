import { type SesEventRecordMail } from './ses-event-record-mail';
import { type SesEventRecordReceipt } from './ses-event-record-receipt';

/**
 * SES event record message
 */
export interface SesEventRecordMessage {
  readonly mail: SesEventRecordMail;
  readonly receipt: SesEventRecordReceipt;
}
