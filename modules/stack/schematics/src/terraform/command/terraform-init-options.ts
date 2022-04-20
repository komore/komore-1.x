import { type ReadonlyRecord } from '@komore/typescript';

/**
 * terraform init options
 *
 * @note {@link https://www.terraform.io/cli/commands/init terraform init}
 */
export interface TerraformInitOptions {
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
