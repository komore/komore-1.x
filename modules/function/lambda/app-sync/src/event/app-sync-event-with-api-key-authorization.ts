import type { AppSyncEvent } from './app-sync-event';

/**
 * AppSync event with an API key authorization
 * @template ArgumentsType Arguments type
 */
export type AppSyncEventWithApiKeyAuthorization<ArgumentsType> = Omit<AppSyncEvent<ArgumentsType>, 'identity'> & {
  readonly identity: null;
};
