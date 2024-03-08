/**
 * Cognito user statuses
 */
export const cognitoUserStatuses = [
  'CONFIRMED', // User confirmed
  'EXTERNAL_PROVIDER', // User signed in with a third-party identity provider
  'FORCE_CHANGE_PASSWORD', // User confirmed and able to sign in using a temporary password, but required to change it
  'RESET_REQUIRED', // User confirmed but must request a code and reset their password
  'UNCONFIRMED', // User created but not confirmed
  'UNKNOWN',
] as const;
