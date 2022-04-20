/**
 * Workspace script
 */
export interface WorkspaceScript {
  /**
   * Path to the TypeScript file
   */
  readonly main: string;
  /**
   * Path to the tsconfig.json file
   */
  readonly tsConfigPath: string;
}
