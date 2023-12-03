import { type ProjectName } from '../../project/name/project-name';
import { type TaskName } from '../name/task-name';

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
