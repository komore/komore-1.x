import { type CognitoApiClient } from '../cognito-api-client';
import { cognitoTargetPrefix } from '../cognito-target-prefix';
import { type DeleteCognitoGroupParameters } from './delete-cognito-group-parameters';

/**
 * Creates a function that deletes a Cognito group
 *
 * @param apiClient Cognito API client
 * @returns Function that deletes a Cognito group
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html DeleteGroup}
 */
export function deleteCognitoGroup(
  apiClient: CognitoApiClient
): (parameters: DeleteCognitoGroupParameters) => Observable<void> {
  return parameters =>
    apiClient({
      operation: `${cognitoTargetPrefix}.DeleteGroup`,
      parameters,
    });
}
