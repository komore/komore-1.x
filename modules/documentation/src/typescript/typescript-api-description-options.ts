/**
 * TypeScript API description options
 */
export interface TypeScriptApiDescriptionOptions {
  /**
   * Paths
   */
  readonly paths: {
    /**
     * Path to the library entry-point source file (e.g. index.ts)
     */
    readonly entryPoint: string;
    /**
     * Path to the package.json file
     */
    readonly packageJson: string;
    /**
     * Path to the tsconfig.json file for sources
     */
    readonly tsConfig: string;
    /**
     * Path to the tsconfig.json file for specifications
     */
    readonly tsConfigSpec?: string;
  };
}
