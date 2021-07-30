import type { ReadonlyRecord } from '@komore/typescript';

/**
 * AppSync event Cognito identity
 * @note {@link https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html#aws-appsync-resolver-context-reference-identity Resolver Context Reference - Identity - AMAZON_COGNITO_USER_POOLS authorization}
 */
export interface AppSyncEventCognitoIdentity {
  /**
   * User claims
   */
  readonly claims: ReadonlyRecord<string, string>;

  /**
   * Default authorization strategiry for the caller
   */
  readonly defaultAuthStrategy: 'ALLOW' | 'DENY';

  /**
   * Token issuer
   */
  readonly issuer: string;

  /**
   * cognito:username attribute value
   */
  readonly username: string;

  /**
   * Source IP address of the AppSync caller
   * @note Multiple IP addresses will be provided if the `x-forwarded-for` header is present
   */
  readonly sourceIp: ReadonlyArray<string>;

  /**
   * UUID of the authenticated user
   */
  readonly sub: string;
}
