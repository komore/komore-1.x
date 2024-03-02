import { type cognitoUserMigrationStatuses } from './cognito-user-migration-statuses';

/**
 * Cognito UserMigration status
 */
export type CognitoUserMigrationStatus = (typeof cognitoUserMigrationStatuses)[number];
