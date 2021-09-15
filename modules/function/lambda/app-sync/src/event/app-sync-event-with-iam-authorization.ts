import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventIAMIdentity } from './app-sync-event-iam-identity';

/**
 * AppSync event with an IAM authorization
 * @template ArgumentsType Arguments type
 */
export type AppSyncEventWithIAMAuthorization<ArgumentsType> = Omit<
  AppSyncEvent<ArgumentsType>,
  'identity'
> & {
  readonly identity: AppSyncEventIAMIdentity;
};
