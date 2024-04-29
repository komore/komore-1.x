import { type TerraformCliClient } from '@komore/terraform';

/**
 * Terraform client options
 */
export interface TerraformClientOptions {
  /**
   * Terraform CLI client
   */
  readonly cliClient: TerraformCliClient;
}
