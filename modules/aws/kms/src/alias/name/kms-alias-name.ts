/**
 * KMS alias name
 */
export type KmsAliasName = `alias/${string}` & {
  readonly __tag_awsKmsAliasName: unique symbol;
};
