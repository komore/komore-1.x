import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventCognitoIdentity } from './app-sync-event-cognito-identity';
import type { AppSyncEventIAMIdentity } from './app-sync-event-iam-identity';

/**
 * AppSync event with a Cognito identity
 * @template ArgumentsType Arguments type
 */
type AppSyncEventWithCognitoIdentity<ArgumentsType> = AppSyncEvent<ArgumentsType> & { readonly identity: AppSyncEventCognitoIdentity };

/**
 * Tests whether an AppSync event has a Cognito user pool identity
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has a Cognito user pool identity
 * @param ArgumentsType Arguments type
 */
export function hasCognitoIdentity<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithCognitoIdentity<ArgumentsType> {
  const identity = appSyncEvent.identity;
  if (identity === null) {
    return false;
  }

  const cognitoOrIAMIdentity = identity as Partial<AppSyncEventCognitoIdentity & AppSyncEventIAMIdentity>;

  return cognitoOrIAMIdentity.defaultAuthStrategy !== undefined;
}
