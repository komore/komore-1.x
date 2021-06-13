/**
 * Cognito event user migration status
 */
export type CognitoEventUserMigrationStatus =
  | 'ARCHIVED'
  | 'CONFIRMED'
  | 'COMPROMISED'
  | 'FORCE_CHANGE_PASSWORD'
  | 'RESET_REQUIRED'
  | 'UNCONFIRMED'
  | 'UNKNOWN';
