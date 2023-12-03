/**
 * Lint module executor options
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
