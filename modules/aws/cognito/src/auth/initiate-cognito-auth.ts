import { type CognitoApiClient } from '../cognito-api-client';
import { type InitiateCognitoAuthParameters } from './initiate-cognito-auth-parameters';
import { type InitiateCognitoAuthResult } from './initiate-cognito-auth-result';

/**
 * Creates a function that initiates a sign-in for a Cognito user
 *
 * @param apiClient Cognito API client
 * @returns Function that initiates a sign-in for a Cognito user
 * @see {@link https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html InitiateAuth}
 */
export function initiateCognitoAuth(
  apiClient: CognitoApiClient
): (parameters: InitiateCognitoAuthParameters) => Observable<InitiateCognitoAuthResult> {
  const operation = 'InitiateAuth';
  return parameters => apiClient({ operation, parameters });
}
