import { type WorkspaceContext } from '@komore/schematics';

import { type TaskRunner } from './task-runner';

/**
 * Task runner factory
 *
 * @template Options Options
 */
export interface TaskRunnerFactory<Options> {
  /**
   * Creates a task runner
   *
   * @param options Options
   * @param workspaceContext Workspace context
   * @returns Task runner
   */
  (options: Options, workspaceContext: WorkspaceContext): Observable<TaskRunner>;
}
