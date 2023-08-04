/**
 * Lint module executor options
 * TODO: generate from schema json
 */
export interface LintModuleExecutorOptions {
  /**
   * ESLint configuration
   */
  readonly eslintConfig: string;
  /**
   * Files pattern
   */
  readonly filesPattern: string;
  /**
   * TypeScript configuration file path
   */
  readonly tsConfig: string;
  /**
   * Whether to use watch mode
   */
  readonly watch: boolean;
}
