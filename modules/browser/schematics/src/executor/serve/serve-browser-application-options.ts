import { type WorkspaceExecutorTaskId } from '@komore/schematics';

/**
 * Serve browser application options
 */
export interface ServeBrowserApplicationOptions {
  /**
   * HTTP options
   */
  readonly http: {
    /**
     * HTTP host
     */
    readonly host: string;
    /**
     * HTTP port
     */
    readonly port: string;
  };
  /**
   * Paths
   */
  readonly paths: {
    /**
     * index.html file path
     */
    readonly indexHtml: string;
    /**
     * Root path used to serve files
     */
    readonly rootPath: string;
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
