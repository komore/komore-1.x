/**
 * Route 53 hosted zone change identifier
 */
export type Route53HostedZoneChangeId = string & {
  readonly __tag_awsRoute53HostedZoneChangeId: unique symbol;
};
