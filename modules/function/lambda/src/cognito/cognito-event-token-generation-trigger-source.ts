/**
 * Cognito event token generation trigger source
 */
export type CognitoEventTokenGenerationTriggerSource =
  | 'TokenGeneration_Authentication'
  | 'TokenGeneration_AuthenticationDevice'
  | 'TokenGeneration_HostedAuth'
  | 'TokenGeneration_NewPasswordChallenge'
  | 'TokenGeneration_RefreshTokens';
