import type { AppSyncEvent } from './app-sync-event';

/**
 * AppSync event with an API key identity
 */
export type AppSyncEventWithApiKeyIdentity<T> = AppSyncEvent<T> & { readonly identity: null };
