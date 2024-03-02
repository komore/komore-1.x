import { type TaskRunner } from './task-runner';
import { type TaskRunnerOptions } from './task-runner-options';

/**
 * Task runner factory
 *
 * @template Options Options
 */
export interface TaskRunnerFactory {
  /**
   * Creates a task runner
   *
   * @param options Task runner options
   * @returns Task runner
   */
  (options: TaskRunnerOptions): Observable<TaskRunner>;
}
