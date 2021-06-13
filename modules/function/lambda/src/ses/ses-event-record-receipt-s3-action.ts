/**
 * SES event record receipt for an S3 action
 */
export interface SesEventRecordReceiptS3Action {
  readonly bucketName: string;
  readonly objectKey: string;
  readonly type: 'S3';
  readonly topicArn?: string;
}
