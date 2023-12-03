import { type ObservableMap } from '@komore/reactive';

import { type TaskName } from '../task/name/task-name';
import { type TaskConfiguration } from '../task/task-configuration';
import { type ProjectName } from './name/project-name';
import { type ProjectTag } from './tag/project-tag';
import { type ProjectType } from './type/project-type';

/**
 * Project configuration
 */
export interface ProjectConfiguration {
  /**
   * Domain
   */
  readonly domain: string;
  /**
   * Project name
   */
  readonly name: ProjectName;
  /**
   * Project path relative to the workspace root
   */
  readonly path: string;
  /**
   * Tasks
   */
  readonly tasks: ObservableMap<TaskName, TaskConfiguration>;
  /**
   * List of tags
   */
  readonly tags: ReadonlyArray<ProjectTag>;
  /**
   * Project type
   */
  readonly type: ProjectType;
}
