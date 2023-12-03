/**
 * SES event record receipt for a Lambda action
 */
export interface SesEventRecordReceiptLambdaAction {
  readonly functionArn: `arn:aws:lambda:${string}`;
  readonly invocationType: string;
  readonly topicArn?: string;
  readonly type: 'Lambda';
}
