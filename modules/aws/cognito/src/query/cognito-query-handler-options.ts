import { type CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

import { type Observable } from '@komore/reactive';

/**
 * Cognito query handler options
 */
export interface CognitoQueryHandlerOptions {
  /**
   * Cognito identity provider client
   */
  readonly client$: Observable<CognitoIdentityProviderClient>;
}
