import { type WorkspaceContext } from '../context/workspace-context';
import { type ProjectConfiguration } from '../project/project-configuration';
import { type TaskConfiguration } from '../task/task-configuration';

/**
 * Workspace executor options processor
 *
 * @template OptionsSchemaType Options schema type
 * @template OptionsType Options type
 */
export interface WorkspaceExecutorOptionsProcessor<OptionsSchemaType = unknown, OptionsType = OptionsSchemaType> {
  /**
   * Processes a task configuration
   *
   * @param taskConfiguration Task configuration
   * @param projectConfiguration Project configuration
   * @param workspaceContext Workspace context
   * @returns Processed task configuration
   */
  (
    taskConfiguration: TaskConfiguration<Partial<OptionsSchemaType>>,
    projectConfiguration: ProjectConfiguration,
    workspaceContext: WorkspaceContext
  ): Observable<TaskConfiguration<OptionsType>>;
}
