import { type CognitoApiClient } from '../../cognito-api-client';
import { type AdminDeleteCognitoUserParameters } from './admin-delete-cognito-user-parameters';

/**
 * Creates a function that deletes a Cognito user, as an administrator
 *
 * @param apiClient API client
 * @returns Function that deletes a Cognito user, as an administrator
 */
export function adminDeleteCognitoUser(
  apiClient: CognitoApiClient
): (parameters: AdminDeleteCognitoUserParameters) => Observable<void> {
  const operation = 'AdminDeleteUser';
  return parameters => apiClient({ operation, parameters });
}
