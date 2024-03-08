import { type KinesisStreamArn } from '../stream/arn/kinesis-stream-arn';
import { type KinesisStreamName } from '../stream/name/kinesis-stream-name';
import { type PutKinesisRecordBaseParameters } from './put-kinesis-record-base-parameters';

/**
 * Put Kinesis record parameters
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html#API_PutRecord_RequestParameters PutRecord Request Parameters}
 */
export type PutKinesisRecordParameters = PutKinesisRecordBaseParameters &
  (
    | {
        /**
         * Stream ARN
         */
        readonly StreamArn: KinesisStreamArn;
      }
    | {
        /**
         * Stream name
         */
        readonly StreamName: KinesisStreamName;
      }
  );
