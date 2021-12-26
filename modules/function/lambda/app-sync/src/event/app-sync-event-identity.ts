import { type AppSyncEventApiKeyIdentity } from './app-sync-event-api-key-identity';
import { type AppSyncEventCognitoIdentity } from './app-sync-event-cognito-identity';
import { type AppSyncEventIAMIdentity } from './app-sync-event-iam-identity';
import { type AppSyncEventOpenIDConnectIdentity } from './app-sync-event-openid-connect-identity';

/**
 * AppSync event identity
 */
export type AppSyncEventIdentity =
  | AppSyncEventApiKeyIdentity
  | AppSyncEventCognitoIdentity
  | AppSyncEventIAMIdentity
  | AppSyncEventOpenIDConnectIdentity;
