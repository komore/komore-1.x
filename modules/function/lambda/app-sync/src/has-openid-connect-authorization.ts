import type { AppSyncEvent } from './event/app-sync-event';
import type { AppSyncEventWithOpenIDConnectAuthorization } from './event/app-sync-event-with-openid-connect-authorization';

/**
 * Tests whether an AppSync event has an OpenID Connect authorization
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has an OpenID Connect authorization
 * @param ArgumentsType Arguments type
 */
export function hasOpenIDConnectAuthorization<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithOpenIDConnectAuthorization<ArgumentsType> {
  // TODO: validate
  return appSyncEvent.identity === null;
}
