import { type Observable } from '@komore/reactive';
import { type GenericWorkspaceExecutorEvent, type TaskReference } from '@komore/schematics';

/**
 * Task runner
 */
export interface TaskRunner {
  /**
   * Runs a task
   *
   * @param taskReference Project task reference observable
   * @returns Stream of workspace executor events
   */
  (taskReference: Observable<TaskReference>): Observable<GenericWorkspaceExecutorEvent>;
}
