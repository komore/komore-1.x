import { type Observable } from '@komore/reactive';
import { type WorkspaceExecutor } from './workspace-executor';

/**
 * Workspace executor factory
 *
 * @template OptionsType Executor options type
 */
export interface WorkspaceExecutorFactory<OptionsType = unknown> {
  /**
   * Creates a workspace executor
   *
   * @returns Workspace executor
   */
  (): Observable<WorkspaceExecutor<OptionsType>>;
}
