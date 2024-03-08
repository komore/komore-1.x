import { type StandardCognitoUserAttributeName } from './standard-cognito-user-attribute-name';

/**
 * Cognito user attribute name
 */
export type CognitoUserAttributeName =
  | StandardCognitoUserAttributeName
  | (string & {
      readonly __tag_awsCognitoUserAttributeName: unique symbol;
    });
