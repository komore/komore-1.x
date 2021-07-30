import type { ReadonlyRecord } from '@komore/typescript';

/**
 * AppSync event information
 */
export interface AppSyncEventInfo {
  readonly fieldName: string;
  readonly parentTypeName: string;
  readonly selectionSetGraphQL: string;
  readonly selectionSetList: ReadonlyArray<string>;
  readonly variables: ReadonlyRecord<string, unknown>;
}
