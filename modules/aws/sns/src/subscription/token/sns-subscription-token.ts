/**
 * SNS subscription token
 */
export type SnsSubscriptionToken = string & {
  readonly __tag_awsSnsSubscriptionToken: unique symbol;
};
