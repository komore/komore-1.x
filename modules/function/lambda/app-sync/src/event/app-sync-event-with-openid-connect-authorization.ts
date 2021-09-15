import type { AppSyncEvent } from './app-sync-event';
import type { AppSyncEventOpenIDConnectIdentity } from './app-sync-event-openid-connect-identity';

/**
 * AppSync event with an OpenID Connect authorization
 * @template ArgumentsType Arguments type
 */
export type AppSyncEventWithOpenIDConnectAuthorization<ArgumentsType> = Omit<
  AppSyncEvent<ArgumentsType>,
  'identity'
> & {
  readonly identity: AppSyncEventOpenIDConnectIdentity;
};
