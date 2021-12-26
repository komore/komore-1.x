import { type AppSyncEvent } from './event/app-sync-event';
import { type AppSyncEventWithApiKeyAuthorization } from './event/app-sync-event-with-api-key-authorization';

/**
 * Tests whether an AppSync event has an API key authorization
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has an API key authorization
 * @param ArgumentsType Arguments type
 */
export function hasApiKeyAuthorization<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithApiKeyAuthorization<ArgumentsType> {
  return appSyncEvent.identity === null;
}
