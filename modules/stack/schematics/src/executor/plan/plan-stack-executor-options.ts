import { type StackExecutorOptions } from '../stack-executor-options';

/**
 * Plan stack executor options
 */
export interface PlanStackExecutorOptions extends StackExecutorOptions {
  /**
   * Disables synchronizing the Terraform state with remote objects before checking for configuration changes
   *
   * While this option can potentially reduce the duration of the planning phase, it will prevent Terraform from
   * detecting changes that may have occured outside of Terraform.
   */
  readonly refreshOnly?: boolean;
}
