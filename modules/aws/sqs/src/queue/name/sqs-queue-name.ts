/**
 * SQS queue name
 */
export type SqsQueueName = string & {
  readonly __tag_awsSqsQueueName: unique symbol;
};
