/**
 * AWS account identifier
 */
export type AwsAccountId = string & {
  readonly __tag_awsAccountId: unique symbol;
};
