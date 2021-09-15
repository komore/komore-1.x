import type { AppSyncEvent } from './event/app-sync-event';
import type { AppSyncEventIAMIdentity } from './event/app-sync-event-iam-identity';
import type { AppSyncEventWithIAMAuthorization } from './event/app-sync-event-with-iam-authorization';

/**
 * Tests whether an AppSync event has an IAM authorization
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has an IAM authorization
 * @param ArgumentsType Arguments type
 */
export function hasIAMAuthorization<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithIAMAuthorization<ArgumentsType> {
  if (appSyncEvent.identity === null) {
    return false;
  }

  const maybeIAMIdentity = appSyncEvent.identity as Partial<AppSyncEventIAMIdentity>;
  return maybeIAMIdentity.accountId !== undefined;
}
