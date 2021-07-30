import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventWithApiKeyIdentity } from './app-sync-event-with-api-key-identity';

/**
 * Tests whether an AppSync event has an API key identity
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has an API key identity
 * @param ArgumentsType Arguments type
 */
export function hasApiKeyIdentity<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithApiKeyIdentity<ArgumentsType> {
  return appSyncEvent.identity === null;
}
