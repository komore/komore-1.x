import type { ReadonlyRecord } from '@komore/typescript';

/**
 * AppSync event request
 */
export interface AppSyncEventRequest {
  readonly headers: ReadonlyRecord<string, string>;
}
