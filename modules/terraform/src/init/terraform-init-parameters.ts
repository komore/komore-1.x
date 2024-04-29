import { type ReadonlyRecord } from '@komore/typescript';

/**
 * `terraform init` parameters
 *
 * @note {@link https://terraform.org/docs/cli/commands/init terraform init}
 */
export interface TerraformInitParameters {
  /**
   * Backend configuration settings
   *
   * @note `-backend-config="key=value"` flags
   */
  readonly backendConfiguration: ReadonlyRecord<string, string>;
  /**
   * Whether modules and plugins should be upgraded
   *
   * @note `-upgrade` flag
   */
  readonly upgrade: boolean;
}
