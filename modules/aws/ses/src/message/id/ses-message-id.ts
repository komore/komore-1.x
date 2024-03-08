/**
 * SES message identifier
 */
export type SesMessageId = string & {
  readonly __tag_awsSesMessageId: unique symbol;
};
