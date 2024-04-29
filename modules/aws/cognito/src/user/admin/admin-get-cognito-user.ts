import { type CognitoApiClient } from '../../cognito-api-client';
import { type AdminGetCognitoUserParameters } from './admin-get-cognito-user-parameters';
import { type AdminGetCognitoUserResult } from './admin-get-cognito-user-result';

/**
 * Creates a function that returns a Cognito user, as an administrator
 *
 * @param apiClient API client
 * @returns Function that returns a Cognito user, as an administrator
 */
export function adminGetCognitoUser(
  apiClient: CognitoApiClient
): (parameters: AdminGetCognitoUserParameters) => Observable<AdminGetCognitoUserResult> {
  const operation = 'AdminGetUser';
  return parameters => apiClient({ operation, parameters });
}
