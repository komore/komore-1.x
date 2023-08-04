import { type ProjectName } from '../project/project-name';
import { type TaskName } from './task-name';

/**
 * Task reference
 */
export interface TaskReference {
  /**
   * Project name
   */
  readonly projectName: ProjectName;
  /**
   * Task name
   */
  readonly taskName: TaskName;
}
