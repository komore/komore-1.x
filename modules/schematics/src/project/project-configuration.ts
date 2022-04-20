import { type ReadonlyRecord } from '@komore/typescript';
import { type TaskConfiguration } from '../task/task-configuration';
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
