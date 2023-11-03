import { type ReadonlyRecord } from '@komore/typescript';

/**
 * `tofu plan` options
 *
 * @note {@link https://opentofu.org/docs/cli/commands/plan tofu plan}
 */
export interface OpenTofuPlanOptions {
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
