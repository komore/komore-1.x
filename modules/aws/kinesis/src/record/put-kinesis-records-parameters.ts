import { type KinesisStreamArn } from '../stream/arn/kinesis-stream-arn';
import { type KinesisStreamName } from '../stream/name/kinesis-stream-name';
import { type PutKinesisRecordsBaseParameters } from './put-kinesis-records-base-parameters';

/**
 * Put Kinesis records parameters
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html#API_PutRecords_RequestParameters PutRecords Request Parameters}
 */
export type PutKinesisRecordsParameters = PutKinesisRecordsBaseParameters &
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
