import { type TaskReference } from '../../task/task-reference';

/**
 * Task graph node
 */
export interface TaskGraphNode {
  /**
   * Task reference
   */
  readonly taskReference: TaskReference;
}
