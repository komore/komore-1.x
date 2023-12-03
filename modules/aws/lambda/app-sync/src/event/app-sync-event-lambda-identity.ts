/**
 * AppSync event IAM identity
 * @note {@link https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html#aws-appsync-resolver-context-reference-identity Resolver Context Reference - Identity - Lambda authorization}
 */
export interface AppSyncEventLambdaIdentity {
  readonly resolverContext: Record<string, unknown>;
}
