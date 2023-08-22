import { type WorkspaceExecutorTaskId } from '@komore/schematics';

/**
 * Lint module options
 */
export interface LintModuleOptions {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * Path to the ESLint configuration
     */
    readonly eslintConfig: string;
    /**
     * Path pattern
     */
    readonly filesPattern: string;
    /**
     * Path to the TypeScript configuration file
     */
    readonly tsConfig: string;
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
