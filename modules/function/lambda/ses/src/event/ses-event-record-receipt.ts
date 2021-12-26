import { type SesEventRecordReceiptBounceAction } from './ses-event-record-receipt-bounce-action';
import { type SesEventRecordReceiptDmarcPolicy } from './ses-event-record-receipt-dmarc-policy';
import { type SesEventRecordReceiptLambdaAction } from './ses-event-record-receipt-lambda-action';
import { type SesEventRecordReceiptS3Action } from './ses-event-record-receipt-s3-action';
import { type SesEventRecordReceiptSnsAction } from './ses-event-record-receipt-sns-action';
import { type SesEventRecordReceiptStatus } from './ses-event-record-receipt-status';
import { type SesEventRecordReceiptStopAction } from './ses-event-record-receipt-stop-action';
import { type SesEventRecordReceiptWorkMailAction } from './ses-event-record-receipt-work-mail-action';

/**
 * SES event record receipt
 */
export interface SesEventRecordReceipt {
  readonly action:
    | SesEventRecordReceiptBounceAction
    | SesEventRecordReceiptLambdaAction
    | SesEventRecordReceiptS3Action
    | SesEventRecordReceiptSnsAction
    | SesEventRecordReceiptStopAction
    | SesEventRecordReceiptWorkMailAction;
  readonly dkimVerdict: SesEventRecordReceiptStatus;
  readonly dmarcPolicy?: SesEventRecordReceiptDmarcPolicy;
  readonly dmarcVerdict: SesEventRecordReceiptStatus;
  readonly processingTimeMillis: number;
  readonly recipients: ReadonlyArray<string>;
  readonly spamVerdict: SesEventRecordReceiptStatus;
  readonly spfVerdict: SesEventRecordReceiptStatus;
  readonly timestamp: string;
  readonly virusVerdict: SesEventRecordReceiptStatus;
}
