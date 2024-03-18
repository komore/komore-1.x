/**
 * SQS message receipt handle
 */
export type SqsMessageReceiptHandle = string & {
  readonly __tag_awsSqsMessageReceiptHandle: unique symbol;
};
