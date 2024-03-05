/**
 * Kinesis stream name
 */
export type KinesisStreamName = string & {
  readonly __tag_awsKinesisStreamName: unique symbol;
};
