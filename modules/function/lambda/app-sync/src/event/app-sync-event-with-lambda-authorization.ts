import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventIAMIdentity } from './app-sync-event-iam-identity';

/**
 * AppSync event with a Lambda authorization
 * @template ArgumentsType Arguments type
 */
export type AppSyncEventWithLambdaAuthorization<ArgumentsType> = Omit<
  AppSyncEvent<ArgumentsType>,
  'identity'
> & {
  readonly identity: AppSyncEventIAMIdentity;
};
