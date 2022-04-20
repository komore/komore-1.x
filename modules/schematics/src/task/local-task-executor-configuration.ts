/**
 * Local task executor configuration
 */
export interface LocalTaskExecutorConfiguration {
  /**
   * Path to the TypeScript entry-point file
   */
  readonly main: string;
  /**
   * Path to the tsconfig.json file
   */
  readonly tsConfig: string;
}
