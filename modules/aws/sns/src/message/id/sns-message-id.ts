/**
 * SNS message identifier
 */
export type SnsMessageId = string & {
  readonly __tag_awsSnsMessageId: unique symbol;
};
