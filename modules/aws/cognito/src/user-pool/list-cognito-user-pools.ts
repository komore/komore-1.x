import { type CognitoApiClient } from '../cognito-api-client';
import { type ListCognitoUserPoolsParameters } from './list-cognito-user-pools-parameters';
import { type ListCognitoUserPoolsResult } from './list-cognito-user-pools-result';

/**
 * Creates a function that lists Cognito user pools
 *
 * @param apiClient Cognito API client
 * @returns Function that lists Cognito user pools
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html ListUserPools}
 */
export function listCognitoUserPools(
  apiClient: CognitoApiClient
): (parameters: ListCognitoUserPoolsParameters) => Observable<ListCognitoUserPoolsResult> {
  const operation = 'ListUserPools';
  return parameters => apiClient({ operation, parameters });
}
