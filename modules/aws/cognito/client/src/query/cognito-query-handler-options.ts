import { type CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

/**
 * Cognito query handler options
 */
export interface CognitoQueryHandlerOptions {
  /**
   * Cognito identity provider client
   */
  readonly client$: Observable<CognitoIdentityProviderClient>;
}
