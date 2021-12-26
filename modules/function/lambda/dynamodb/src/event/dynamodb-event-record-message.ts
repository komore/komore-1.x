import { type DynamoDBEventRecordAttributeValue } from './dynamodb-event-record-attribute-value';
import { type DynamoDBStreamViewType } from './dynamodb-stream-view-type';

/**
 * DynamoDB event record message
 * @note {@link http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html StreamRecord}
 */
export interface DynamoDBEventRecordMessage {
  readonly ApproximateCreationDateTime?: number;
  readonly Keys?: Record<string, DynamoDBEventRecordAttributeValue>;
  readonly NewImage: Record<string, DynamoDBEventRecordAttributeValue>;
  readonly OldImage?: Record<string, DynamoDBEventRecordAttributeValue>;
  readonly SequenceNumber: string;
  readonly SizeBytes: number;
  readonly StreamViewType: DynamoDBStreamViewType;
}
