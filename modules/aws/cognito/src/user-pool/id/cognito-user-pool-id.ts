/**
 * Cognito user pool identifier
 */
export type CognitoUserPoolId = string & {
  readonly __tag_awsCognitoUserPoolId: unique symbol;
};
