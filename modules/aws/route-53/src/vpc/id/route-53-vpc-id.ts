/**
 * Route 53 VPC identifier
 */
export type Route53VpcId = string & {
  readonly __tag_awsRoute53VpcId: unique symbol;
};
