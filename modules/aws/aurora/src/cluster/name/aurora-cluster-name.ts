/**
 * Aurora cluster name
 */
export type AuroraClusterName = string & {
  readonly __tag_awsAuroraClusterName: unique symbol;
};
