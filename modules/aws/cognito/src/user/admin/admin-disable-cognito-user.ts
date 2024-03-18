import { type CognitoApiClient } from '../../cognito-api-client';
import { cognitoTargetPrefix } from '../../cognito-target-prefix';
import { type AdminDisableCognitoUserParameters } from './admin-disable-cognito-user-parameters';

/**
 * Creates a function that disables a Cognito user, as an administrator
 *
 * @param apiClient API client
 * @returns Function that disables a Cognito user, as an administrator
 */
export function adminDisableCognitoUser(
  apiClient: CognitoApiClient
): (parameters: AdminDisableCognitoUserParameters) => Observable<void> {
  return parameters =>
    apiClient({
      operation: `${cognitoTargetPrefix}.AdminDisableUser`,
      parameters,
    });
}
