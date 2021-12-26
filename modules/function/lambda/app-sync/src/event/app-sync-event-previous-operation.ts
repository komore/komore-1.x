import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AppSync event previous operation
 */
export interface AppSyncEventPreviousOperation {
  readonly result: ReadonlyRecord<string, unknown>;
}
