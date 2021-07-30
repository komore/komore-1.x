import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventOpenIDConnectIdentity } from './app-sync-event-openid-connect-identity';

/**
 * AppSync event with an OpenID Connect identity
 * @template ArgumentsType Arguments type
 */
type AppSyncEventWithOpenIDConnectIdentity<ArgumentsType> = AppSyncEvent<ArgumentsType> & {
  readonly identity: AppSyncEventOpenIDConnectIdentity;
};

/**
 * Tests whether an AppSync event has an OpenID Connect identity
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has an OpenID Connect identity
 * @param ArgumentsType Arguments type
 */
export function hasCognitoIdentity<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithOpenIDConnectIdentity<ArgumentsType> {
  return appSyncEvent.identity === null;
}
