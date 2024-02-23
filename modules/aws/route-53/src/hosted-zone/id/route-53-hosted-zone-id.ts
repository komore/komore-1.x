/**
 * Route 53 hosted zone identifier
 */
export type Route53HostedZoneId = string & {
  readonly __tag_awsRoute53HozedZoneId: unique symbol;
};
