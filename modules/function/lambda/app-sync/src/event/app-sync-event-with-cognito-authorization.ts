import { type AppSyncEvent } from './app-sync-event';
import { type AppSyncEventCognitoIdentity } from './app-sync-event-cognito-identity';

/**
 * AppSync event with a Cognito authorization
 * @template ArgumentsType Arguments type
 */
export type AppSyncEventWithCognitoAuthorization<ArgumentsType> = Omit<AppSyncEvent<ArgumentsType>, 'identity'> & {
  readonly identity: AppSyncEventCognitoIdentity;
};
