import type { ReadonlyRecord } from '@komore/typescript';
import type { AppSyncEventApiKeyIdentity } from './app-sync-event-api-key-identity';
import type { AppSyncEventCognitoIdentity } from './app-sync-event-cognito-identity';
import type { AppSyncEventIAMIdentity } from './app-sync-event-iam-identity';
import type { AppSyncEventInfo } from './app-sync-event-info';
import type { AppSyncEventOpenIDConnectIdentity } from './app-sync-event-openid-connect-identity';
import type { AppSyncEventPreviousOperation } from './app-sync-event-previous-operation';
import type { AppSyncEventRequest } from './app-sync-event-request';

/**
 * AppSync event
 * @template ArgumentsType Arguments type
 */
export interface AppSyncEvent<ArgumentsType> {
  readonly arguments: ArgumentsType;
  readonly identity:
    | AppSyncEventApiKeyIdentity
    | AppSyncEventCognitoIdentity
    | AppSyncEventIAMIdentity
    | AppSyncEventOpenIDConnectIdentity;
  readonly info: AppSyncEventInfo;
  readonly prev: AppSyncEventPreviousOperation | null;
  readonly request: AppSyncEventRequest;
  readonly source: ReadonlyRecord<string, unknown> | null;
  readonly stash: ReadonlyRecord<string, unknown>;
}
