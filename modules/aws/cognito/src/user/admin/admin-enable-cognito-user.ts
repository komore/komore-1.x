import { type CognitoApiClient } from '../../cognito-api-client';
import { cognitoTargetPrefix } from '../../cognito-target-prefix';
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
  return parameters =>
    apiClient({
      operation: `${cognitoTargetPrefix}.AdminEnableUser`,
      parameters,
    });
}
