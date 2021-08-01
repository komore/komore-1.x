/**
 * SES event record receipt for a work mail action
 */
export interface SesEventRecordReceiptWorkMailAction {
  readonly organizationArn: string;
  readonly topicArn?: string;
  readonly type: 'WorkMail';
}
