/**
 * Kinesis shard identifier
 */
export type KinesisShardId = string & {
  readonly __tag_awsKinesisShardId: unique symbol;
};
