import { type ReadonlyRecord } from '@komore/typescript';

/**
 * terraform plan options
 *
 * @note {@link https://www.terraform.io/cli/commands/plan terraform plan}
 */
export interface TerraformPlanOptions {
  /**
   * Profile
   */
  readonly profile: string;
  /**
   * Variables
   *
   * @note `-var "key=value"` flags
   */
  readonly variables: ReadonlyRecord<string, string>;
}
