import { type SesEventRecordMailCommonHeaders } from './ses-event-record-mail-common-headers';
import { type SesEventRecordMailHeader } from './ses-event-record-mail-header';

/**
 * SES event record mail
 */
export interface SesEventRecordMail {
  readonly commonHeaders: SesEventRecordMailCommonHeaders;
  readonly destination: ReadonlyArray<string>;
  readonly headers: ReadonlyArray<SesEventRecordMailHeader>;
  readonly headersTruncated: boolean;
  readonly messageId: string;
  readonly source: string;
  readonly timestamp: string;
}
