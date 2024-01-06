import { type WorkspaceExecutorTaskId } from '@komore/schematics';

/**
 * Document module options
 */
export interface DocumentModuleOptions {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * Entry-point
     */
    readonly entryPoint: string;
    /**
     * Output path
     */
    readonly outputPath: string;
    /**
     * package.json path
     */
    readonly packageJson: string;
    /**
     * Path to the TypeScript configuration file
     */
    readonly tsConfig: string;
    /**
     * Path to the TypeScript configuration file for specifications
     */
    readonly tsConfigSpec?: string;
  };
  /**
   * Task identifier
   */
  readonly taskId: WorkspaceExecutorTaskId;
  /**
   * Whether to watch for file changes
   */
  readonly watch: boolean;
}
