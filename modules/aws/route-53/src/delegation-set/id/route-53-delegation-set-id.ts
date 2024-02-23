/**
 * Route 53 delegation set identifier
 */
export type Route53DelegationSetId = string & {
  readonly __tag_awsRoute53DelegationSetId: unique symbol;
};
