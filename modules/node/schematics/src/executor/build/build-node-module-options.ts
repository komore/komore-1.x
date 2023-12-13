import { type WorkspaceExecutorTaskId } from '@komore/schematics';

/**
 * Build Node module options
 */
export interface BuildNodeModuleOptions {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * Path to the entry-point
     */
    readonly entryPoint: string;
    /**
     * Path where the output should be written
     */
    readonly outputPath: string;
    /**
     * Path to the TypeScript configuration file
     */
    readonly tsConfig: string;
  };
  /**
   * Task identifier
   */
  readonly taskId: WorkspaceExecutorTaskId;
}
