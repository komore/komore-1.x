/**
 * Lambda event Cognito identity
 */
export interface LambdaEventCognitoIdentity {
  readonly cognitoIdentityId: string;
  readonly cognitoIdentityPoolId: string;
}
