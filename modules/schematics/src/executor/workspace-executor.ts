import { type Observable } from '@komore/reactive';

import { type GenericWorkspaceExecutorEvent } from './event/generic-workspace-executor-event';
import { type WorkspaceExecutorTaskOptions } from './workspace-executor-task-options';

/**
 * Workspace executor
 *
 * @template OptionsType Options type
 */
export interface WorkspaceExecutor<OptionsType = unknown> {
  /**
   * Workspace executor function
   *
   * @param options$ Observable options
   * @returns Observable that emits workspace executor events until completion
   */
  (options$: Observable<OptionsType & WorkspaceExecutorTaskOptions>): Observable<GenericWorkspaceExecutorEvent>;
}
