import { type Observable } from '@komore/reactive';

import { type WorkspaceExecutor } from '../workspace-executor';
import { type WorkspaceExecutorFactoryOptions } from './workspace-executor-factory-options';

/**
 * Workspace executor factory
 *
 * @template OptionsType Executor options type
 */
export interface WorkspaceExecutorFactory<OptionsType = unknown> {
  /**
   * Creates a workspace executor
   *
   * @param options Options
   * @returns Workspace executor
   */
  (options: WorkspaceExecutorFactoryOptions): Observable<WorkspaceExecutor<OptionsType>>;
}
