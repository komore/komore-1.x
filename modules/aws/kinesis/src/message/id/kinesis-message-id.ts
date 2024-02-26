/**
 * Kinesis message identifier
 */
export type KinesisMessageId = string & {
  readonly __tag_awsKinesisMessageId: unique symbol;
};
