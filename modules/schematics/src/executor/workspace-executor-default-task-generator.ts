import { type Observable } from '@komore/reactive';

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
   * @returns Default task configuration
   */
  (projectConfiguration: ProjectConfiguration): Observable<Omit<TaskConfiguration<OptionsType>, 'executor'>>;
}
