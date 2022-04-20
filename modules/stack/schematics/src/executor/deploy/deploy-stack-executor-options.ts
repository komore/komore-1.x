import { type StackExecutorOptions } from '../stack-executor-options';

/**
 * Deploy stack executor options
 */
export interface DeployStackExecutorOptions extends StackExecutorOptions {
  /**
   * Name of the plan task to use to planify the deployment
   */
  readonly planTask?: undefined;
}
