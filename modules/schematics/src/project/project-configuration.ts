import { type ReadonlyRecord } from '@komore/typescript';

import { type TaskConfiguration } from '../task/task-configuration';
import { type ProjectName } from './name/project-name';
import { type ProjectType } from './project-type';

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
  readonly tasks: ReadonlyRecord<string, TaskConfiguration>;
  /**
   * List of tags
   */
  readonly tags: ReadonlyArray<string>;
  /**
   * Project type
   */
  readonly type: ProjectType;
}
