/**
 * SNS topic name
 */
export type SnsTopicName = string & {
  readonly __tag_awsSnsTopicName: unique symbol;
};
