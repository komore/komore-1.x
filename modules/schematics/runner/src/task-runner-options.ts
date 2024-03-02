import { type WorkspaceContext } from '@komore/schematics';

/**
 * Task runner options
 */
export interface TaskRunnerOptions {
  /**
   * Maximum number of tasks to run in parallel
   */
  readonly parallel: number;
  /**
   * Workspace context
   */
  readonly workspaceContext: WorkspaceContext;
}
