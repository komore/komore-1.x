/**
 * SES event record receipt for an SNS action
 */
export interface SesEventRecordReceiptSnsAction {
  readonly topicArn: string;
  readonly type: 'SNS';
}
