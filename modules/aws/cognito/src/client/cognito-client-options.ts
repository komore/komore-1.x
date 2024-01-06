import { type CognitoIdentityProviderClientConfig } from '@aws-sdk/client-cognito-identity-provider';

/**
 * Cognito client options
 */
export interface CognitoClientOptions extends CognitoIdentityProviderClientConfig {}
