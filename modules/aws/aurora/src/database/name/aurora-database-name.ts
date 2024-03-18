/**
 * Aurora database name
 */
export type AuroraDatabaseName = string & {
  readonly __tag_awsAuroraDatabaseName: unique symbol;
};
