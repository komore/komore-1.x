/**
 * Cognito event caller context
 */
export interface CognitoEventCallerContext {
  /**
   * AWS SDK version
   */
  readonly awsSdkVersion: string;
  /**
   * Client identifier
   */
  readonly clientId: string;
}
