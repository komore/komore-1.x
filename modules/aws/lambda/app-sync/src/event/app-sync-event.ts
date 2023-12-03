import { type ReadonlyRecord } from '@komore/typescript';
import { type AppSyncEventIdentity } from './app-sync-event-identity';
import { type AppSyncEventInfo } from './app-sync-event-info';
import { type AppSyncEventPreviousOperation } from './app-sync-event-previous-operation';
import { type AppSyncEventRequest } from './app-sync-event-request';

/**
 * AppSync event
 * @template ArgumentsType Arguments type
 */
export interface AppSyncEvent<ArgumentsType> {
  readonly arguments: ArgumentsType;
  readonly identity: AppSyncEventIdentity;
  readonly info: AppSyncEventInfo;
  readonly prev: AppSyncEventPreviousOperation | null;
  readonly request: AppSyncEventRequest;
  readonly source: ReadonlyRecord<string, unknown> | null;
  readonly stash: ReadonlyRecord<string, unknown>;
}
