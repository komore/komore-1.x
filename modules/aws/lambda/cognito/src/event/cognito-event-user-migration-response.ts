import { type ReadonlyRecord } from '@komore/typescript';
import { type CognitoEventUserMigrationDeliveryMedium } from './cognito-event-user-migration-delivery-medium';
import { type CognitoEventUserMigrationMessageAction } from './cognito-event-user-migration-message-action';
import { type CognitoEventUserMigrationStatus } from './cognito-event-user-migration-status';

/**
 * Cognito event user migration response
 */
export interface CognitoEventUserMigrationResponse {
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly finalUserStatus?: CognitoEventUserMigrationStatus;
  readonly messageAction?: CognitoEventUserMigrationMessageAction;
  readonly desiredDeliveryMediums: ReadonlyArray<CognitoEventUserMigrationDeliveryMedium>;
  readonly forceAliasCreation?: boolean;
}
