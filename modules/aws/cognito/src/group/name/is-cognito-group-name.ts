import { type CognitoGroupName } from './cognito-group-name';

/**
 * Tests whether a string a Cognito group name
 *
 * @param groupName Group name string
 * @returns true if the string is a Cognito group name
 */
export function isCognitoGroupName(groupName: string): groupName is CognitoGroupName {
  return /^[\p{L}\p{M}\p{S}\p{N}\p{P}]{1,128}$/.test(groupName);
}
