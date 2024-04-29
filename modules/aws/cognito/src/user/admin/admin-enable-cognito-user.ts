import { type CognitoApiClient } from '../../cognito-api-client';
import { type AdminEnableCognitoUserParameters } from './admin-enable-cognito-user-parameters';

/**
 * Creates a function that enables a Cognito user, as an administrator
 *
 * @param apiClient API client
 * @returns Function that enables a Cognito user, as an administrator
 */
export function adminEnableCognitoUser(
  apiClient: CognitoApiClient
): (parameters: AdminEnableCognitoUserParameters) => Observable<void> {
  const operation = 'AdminEnableUser';
  return parameters => apiClient({ operation, parameters });
}
