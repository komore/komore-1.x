import { type DynamoDBStreamViewType } from '../dynamodb-stream-view-type';
import { type DynamoDBEventStreamRecordAttributeValue } from './dynamodb-event-stream-record-attribute-value';

/**
 * DynamoDB event stream record
 *
 * @note {@link http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_StreamRecord.html StreamRecord}
 */
export interface DynamoDBEventStreamRecord {
  /**
   * Approximate creation date and time, in UNIX epoch time format rounded down to the closest second
   */
  readonly ApproximateCreationDateTime: number;
  /**
   * Primary key attributes for the item that was modified
   */
  readonly Keys?: Record<string, DynamoDBEventStreamRecordAttributeValue>;
  /**
   * New image
   */
  readonly NewImage?: Record<string, DynamoDBEventStreamRecordAttributeValue>;
  /**
   * Old image
   */
  readonly OldImage?: Record<string, DynamoDBEventStreamRecordAttributeValue>;
  /**
   * Sequence number
   *
   * @note String length between 21 and 40
   */
  readonly SequenceNumber: string;
  /**
   * Size of the stream record
   */
  readonly SizeBytes: number;
  /**
   * Type of data from the modified DynamoDB item that was captured in the stream record
   */
  readonly StreamViewType: DynamoDBStreamViewType;
}
