import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventIAMIdentity } from './app-sync-event-iam-identity';

/**
 * AppSync event with an API key identity
 * @template ArgumentsType Arguments type
 */
type AppSyncEventWithCognitoIdentity<ArgumentsType> = AppSyncEvent<ArgumentsType> & {
  readonly identity: AppSyncEventIAMIdentity;
};

/**
 * Tests whether an AppSync event has a Cognito user pool identity
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has a Cognito user pool identity
 * @param ArgumentsType Arguments type
 */
export function hasCognitoIdentity<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithCognitoIdentity<ArgumentsType> {
  return appSyncEvent.identity === null;
}
