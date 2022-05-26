import { type Observable } from '@komore/reactive';
import { type TaskReference } from '@komore/schematics';

/**
 * Task runner
 */
export interface TaskRunner {
  /**
   * Runs a task
   *
   * @param taskReference Project task reference observable
   * @returns Result
   */
  (taskReference: Observable<TaskReference>): Observable<number>;
}
