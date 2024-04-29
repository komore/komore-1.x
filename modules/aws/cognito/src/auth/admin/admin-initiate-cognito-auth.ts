import { type CognitoApiClient } from '../../cognito-api-client';
import { type AdminInitiateCognitoAuthParameters } from './admin-initiate-cognito-auth-parameters';
import { type AdminInitiateCognitoAuthResult } from './admin-initiate-cognito-auth-result';

/**
 * Creates a function that initiates a Cognito authentication flow as an administrator
 *
 * @param apiClient Cognito API client
 * @returns Function that initiates a Cognito authentication flow as an administrator
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html AdminInitiateAuth}
 */
export function adminInitiateCognitoAuth(
  apiClient: CognitoApiClient
): (parameters: AdminInitiateCognitoAuthParameters) => Observable<AdminInitiateCognitoAuthResult> {
  const operation = 'AdminInitiateAuth';
  return parameters => apiClient({ operation, parameters });
}
