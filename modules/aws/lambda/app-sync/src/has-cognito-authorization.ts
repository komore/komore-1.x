import { type AppSyncEvent } from './event/app-sync-event';
import { type AppSyncEventCognitoIdentity } from './event/app-sync-event-cognito-identity';
import { type AppSyncEventWithCognitoAuthorization } from './event/app-sync-event-with-cognito-authorization';

/**
 * Tests whether an AppSync event has a Cognito user pool authorization
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has a Cognito user pool authorization
 * @param ArgumentsType Arguments type
 */
export function hasCognitoAuthorization<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithCognitoAuthorization<ArgumentsType> {
  const identity = appSyncEvent.identity;
  if (identity === null) {
    return false;
  }

  const maybeCognitoIdentity = identity as Partial<AppSyncEventCognitoIdentity>;
  return maybeCognitoIdentity.defaultAuthStrategy !== undefined;
}
