/**
 * Cognito TokenGeneration trigger sources
 */
export const cognitoTokenGenerationTriggerSources = [
  'TokenGeneration_Authentication',
  'TokenGeneration_AuthenticationDevice',
  'TokenGeneration_HostedAuth',
  'TokenGeneration_NewPasswordChallenge',
  'TokenGeneration_RefreshTokens',
] as const;
