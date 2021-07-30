/**
 * Cognito event caller context
 */
export interface CognitoEventCallerContext {
  readonly awsSdkVersion: string;
  readonly clientId: string;
}
