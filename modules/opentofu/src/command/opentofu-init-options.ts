import { type ReadonlyRecord } from '@komore/typescript';

/**
 * `tofu init` options
 *
 * @note {@link https://opentofu.org/docs/cli/commands/init tofu init}
 */
export interface OpenTofuInitOptions {
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
