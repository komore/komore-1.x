import { type Observable } from '@komore/reactive';
import { type WorkspaceContext } from '../context/workspace-context';
import { type ProjectConfiguration } from '../project/project-configuration';
import { type TaskConfiguration } from '../task/task-configuration';

/**
 * Workspace executor default task generator
 *
 * @template OptionsType Options type
 */
export interface WorkspaceExecutorDefaultTaskGenerator<OptionsType = unknown> {
  /**
   * Returns a default task configuration
   *
   * @param projectConfiguration Project configuration
   * @param workspaceContext Workspace context
   * @returns Default task configuration
   */
  (projectConfiguration: ProjectConfiguration, workspaceContext: WorkspaceContext): Observable<
    Omit<TaskConfiguration<OptionsType>, 'executor'>
  >;
}
