/**
 * SQS event record attributes
 */
export interface SqsEventRecordAttributes {
  readonly ApproximateFirstReceiveTimestamp: string;
  readonly ApproximateReceiveCount: string;
  readonly AWSTraceHeader?: string;
  readonly MessageDeduplicationId?: string;
  readonly MessageGroupId?: string;
  readonly SenderId: string;
  readonly SentTimestamp: string;
  readonly SequenceNumber?: string;
}
