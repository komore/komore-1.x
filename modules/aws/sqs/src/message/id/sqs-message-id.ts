/**
 * SQS message identifier
 */
export type SqsMessageId = string & {
  readonly __tag_awsSqsMessageId: unique symbol;
};
