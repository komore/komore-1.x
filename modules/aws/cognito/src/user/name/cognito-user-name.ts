/**
 * Cognito user name
 */
export type CognitoUserName = string & {
  readonly __tag_awsCognitoUserName: unique symbol;
};
