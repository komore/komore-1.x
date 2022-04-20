/**
 * Stack executor options
 */
export interface StackExecutorOptions {
  /**
   * Target environment
   */
  readonly environment: string;
  /**
   * Maximum parallelism while walking the stack deployment graph
   */
  readonly parallelism: number;
  /**
   * Profile used to deploy the stack
   */
  readonly profile: string;
}
