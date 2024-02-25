import { type WorkspaceExecutorTaskId } from '@komore/schematics';

/**
 * Test module options
 */
export interface TestModuleOptions {
  /**
   * Paths
   */
  readonly paths: {
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
