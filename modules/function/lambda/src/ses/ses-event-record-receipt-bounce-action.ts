/**
 * SES event record receipt for a bounce action
 */
export interface SesEventRecordReceiptBounceAction {
  readonly message: string;
  readonly sender: string;
  readonly smtpReplyCode: string;
  readonly statusCode: string;
  readonly topicArn?: string;
  readonly type: 'Bounce';
}
