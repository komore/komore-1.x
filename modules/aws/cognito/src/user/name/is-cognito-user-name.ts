import { type CognitoUserName } from './cognito-user-name';

/**
 * Tests whether a string a Cognito user name
 *
 * @param userName User name string
 * @returns true if the string is a Cognito user name
 */
export function isCognitoUserName(userName: string): userName is CognitoUserName {
  return /^[\p{L}\p{M}\p{S}\p{N}\p{P}]{1,128}$/.test(userName);
}
