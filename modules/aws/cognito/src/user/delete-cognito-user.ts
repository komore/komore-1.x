import { type CognitoApiClient } from '../cognito-api-client';
import { type DeleteCognitoUserParameters } from './delete-cognito-user-parameters';

/**
 * Creates a function that deletes a Cognito user
 *
 * @param apiClient Cognito API client
 * @returns Function that deletes a Cognito user
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html DeleteUser}
 */
export function deleteCognitoUser(
  apiClient: CognitoApiClient
): (parameters: DeleteCognitoUserParameters) => Observable<void> {
  const operation = 'DeleteUser';
  return parameters => apiClient({ operation, parameters });
}
