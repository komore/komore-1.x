import { type TerraformCliClient } from '@komore/terraform';

/**
 * Terraform query handler options
 */
export interface TerraformQueryHandlerOptions {
  /**
   * Terraform CLI client
   */
  readonly cliClient: TerraformCliClient;
}
