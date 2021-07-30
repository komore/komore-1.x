/**
 * AppSync event IAM identity
 * @note {@link https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html#aws-appsync-resolver-context-reference-identity Resolver Context Reference - Identity - AWS_IAM authorization}
 */
export interface AppSyncEventIAMIdentity {
  /**
   * AWS account identifier of the caller
   */
  readonly accountId: string;

  /**
   * Comma separated list of external identity provider information
   */
  readonly cognitoIdentityAuthProvider: string;

  /**
   * Cognito identity authentication type
   */
  readonly cognitoIdentityAuthType: 'authenticated' | 'unauthenticated';

  /**
   * Cognito identity pool identifier associated with the caller
   */
  readonly cognitoIdentityPoolId: string;

  /**
   * Cognito identity identifier of the caller
   */
  readonly cognitoIdentityId: string;

  /**
   * Source IP address of the AppSync caller
   * @note Multiple IP addresses will be provided if the `x-forwarded-for` header is present
   */
  readonly sourceIp: ReadonlyArray<string>;

  /**
   * IAM user ARN
   */
  readonly userArn: string;

  /**
   * AWS user principal
   */
  readonly username: string;
}
