import { type KinesisRecordEncryptionType } from '../encryption/kinesis-record-encryption-type';
import { type KinesisShardId } from '../shard/id/kinesis-shard-id';

/**
 * Put Kinesis record result
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html#API_PutRecord_ResponseElements PutRecord Response Elements}
 */
export interface PutKinesisRecordResult {
  /**
   * Encryption type
   */
  readonly EncryptionType: KinesisRecordEncryptionType;
  /**
   * Sequence number
   */
  readonly SequenceNumber: string;
  /**
   * Shard identifier
   */
  readonly ShardId: KinesisShardId;
}
