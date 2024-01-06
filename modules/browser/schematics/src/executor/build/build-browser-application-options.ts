import { type WorkspaceExecutorTaskId } from '@komore/schematics';

/**
 * Build browser application options
 */
export interface BuildBrowserApplicationOptions {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * TypeScript configuration file path
     */
    readonly tsConfig: string;
  };
  /**
   * Task identifier
   */
  readonly taskId: WorkspaceExecutorTaskId;
  /**
   * Whether to use watch mode
   */
  readonly watch: boolean;
}
