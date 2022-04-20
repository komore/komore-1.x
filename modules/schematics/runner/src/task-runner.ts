import { type Observable } from '@komore/reactive';
import { type ProjectTaskReference } from '@komore/schematics';

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
  (taskReference: Observable<ProjectTaskReference>): Observable<number>;
}
