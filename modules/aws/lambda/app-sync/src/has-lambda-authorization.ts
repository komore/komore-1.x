import { type AppSyncEvent } from './event/app-sync-event';
import { type AppSyncEventLambdaIdentity } from './event/app-sync-event-lambda-identity';
import { type AppSyncEventWithLambdaAuthorization } from './event/app-sync-event-with-lambda-authorization';

/**
 * Tests whether an AppSync event has a Lambda authorization
 * @param appSyncEvent AppSync event
 * @returns true if the AppSync event has a Lambda authorization
 * @param ArgumentsType Arguments type
 */
export function hasLambdaAuthorization<ArgumentsType>(
  appSyncEvent: AppSyncEvent<ArgumentsType>
): appSyncEvent is AppSyncEventWithLambdaAuthorization<ArgumentsType> {
  if (appSyncEvent.identity === null) {
    return false;
  }

  const maybeIAMIdentity = appSyncEvent.identity as Partial<AppSyncEventLambdaIdentity>;
  return maybeIAMIdentity.resolverContext !== undefined;
}
