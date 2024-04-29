import { createQueryType, queryProperties } from '@komore/query';
import { terraformDomain } from '@komore/terraform';

/**
 * Terraform query
 */
export const terraformQuery = createQueryType(terraformDomain, {
  /**
   * Returns the provider requirements of the configuration
   *
   * @see {@link https://terraform.io/docs/cli/commands/providers terraform providers}
   */
  providers: queryProperties<unknown>(),
  /**
   * Returns details about a state file or a plan file
   *
   * @see {@link https://terraform.io/docs/cli/commands/show terraform show}
   */
  show: queryProperties<unknown, unknown>(),
  /**
   * Returns the Terraform version
   */
  version: queryProperties<string>(),
});
