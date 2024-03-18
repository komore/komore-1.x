/**
 * Aurora transaction identifier
 */
export type AuroraTransactionId = string & {
  readonly __tag_awsAuroraTransactionId: unique symbol;
};
