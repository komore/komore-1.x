import { type CognitoApiClient } from '../cognito-api-client';
import { type ListCognitoUsersParameters } from './list-cognito-users-parameters';
import { type ListCognitoUsersResult } from './list-cognito-users-result';

/**
 * Creates a function that lists Cognito users
 *
 * @param apiClient Cognito API client
 * @returns Function that lists Cognito users
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html ListUsers}
 */
export function listCognitoUsers(
  apiClient: CognitoApiClient
): (parameters: ListCognitoUsersParameters) => Observable<ListCognitoUsersResult> {
  return parameters =>
    apiClient({
      operation: 'cognito.ListUsers',
      parameters,
    });
}
