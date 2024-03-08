import { type cognitoUserStatuses } from './cognito-user-statuses';

/**
 * Cognito user status
 */
export type CognitoUserStatus = (typeof cognitoUserStatuses)[number];
