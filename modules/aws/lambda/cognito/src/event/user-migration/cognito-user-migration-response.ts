import { type ReadonlyRecord } from '@komore/typescript';

import { type CognitoUserMigrationDeliveryMedium } from './cognito-user-migration-delivery-medium';
import { type CognitoUserMigrationMessageAction } from './cognito-user-migration-message-action';
import { type CognitoUserMigrationStatus } from './cognito-user-migration-status';

/**
 * Cognito UserMigration response
 */
export interface CognitoUserMigrationResponse {
  readonly desiredDeliveryMediums: ReadonlyArray<CognitoUserMigrationDeliveryMedium>;
  readonly finalUserStatus?: CognitoUserMigrationStatus;
  readonly forceAliasCreation?: boolean;
  readonly messageAction?: CognitoUserMigrationMessageAction;
  readonly userAttributes: ReadonlyRecord<string, string>;
}
