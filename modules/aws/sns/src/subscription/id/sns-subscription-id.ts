/**
 * SNS subscription identifier
 */
export type SnsSubscriptionId = string & {
  readonly __tag_awsSnsSubscriptionId: unique symbol;
};
