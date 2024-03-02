import { type cognitoUserMigrationMessageActions } from './cognito-user-migration-message-actions';

/**
 * Cognito UserMigration message action
 */
export type CognitoUserMigrationMessageAction = (typeof cognitoUserMigrationMessageActions)[number];
