/**
 * SQS message group identifier
 */
export type SqsMessageGroupId = string & {
  readonly __tag_awsSqsMessageGroupId: unique symbol;
};
