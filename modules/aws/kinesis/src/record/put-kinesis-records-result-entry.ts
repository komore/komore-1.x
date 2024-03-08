import { type KinesisShardId } from '../shard/id/kinesis-shard-id';

/**
 * Put Kinesis records result entry
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecordsResultEntry.html PutRecordsResultEntry}
 */
export type PutKinesisRecordsResultEntry =
  | {
      /**
       * Error code
       */
      readonly ErrorCode: 'ProvisionedThroughputExceededException' | 'InternalFailure';
      /**
       * Error message
       */
      readonly ErrorMessage: string;
    }
  | {
      /**
       * Sequence number
       */
      readonly SequenceNumber: string;
      /**
       * Shard identifier
       */
      readonly ShardId: KinesisShardId;
    };
