import { type CognitoApiClient } from '../../cognito-api-client';
import { cognitoTargetPrefix } from '../../cognito-target-prefix';
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
  return parameters =>
    apiClient({
      operation: `${cognitoTargetPrefix}.AdminDeleteUser`,
      parameters,
    });
}
