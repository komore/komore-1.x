import type { DynamoDBStreamViewType } from './dynamodb-stream-view-type';

/**
 * DynamoDB event record message
 * @note {@link http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html StreamRecord}
 */
export interface DynamoDBEventRecordMessage {
  readonly ApproximateCreationDateTime?: number;
  readonly Keys?: Record<string, AttributeValue>;
  readonly NewImage: Record<string, AttributeValue>;
  readonly OldImage?: Record<string, AttributeValue>;
  readonly SequenceNumber: string;
  readonly SizeBytes: number;
  readonly StreamViewType: DynamoDBStreamViewType;
}
