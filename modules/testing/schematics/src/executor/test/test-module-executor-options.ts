/**
 * Test module executor options
 */
export interface TestModuleExecutorOptions {
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
