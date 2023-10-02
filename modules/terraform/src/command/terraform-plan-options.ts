import { type ReadonlyRecord } from '@komore/typescript';

/**
 * terraform plan options
 *
 * @note {@link https://www.terraform.io/cli/commands/plan terraform plan}
 */
export interface TerraformPlanOptions {
  /**
   * Number of parallel resource operations (defaults to 10)
   */
  readonly parallelism: number;
  /**
   * Variable files
   *
   * @note `-var-file=value` flags
   */
  readonly variableFiles: ReadonlyArray<string>;
  /**
   * Variables
   *
   * @note `-var "key=value"` flags
   */
  readonly variables: ReadonlyRecord<string, string>;
}
