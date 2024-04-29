/**
 * Remove pnpm dependency parameters
 *
 * @see {@link https://pnpm.io/cli/remove#options pnpm remove options}
 */
export interface RemovePnpmDependencyParameters {
  /**
   * Whether to remove globally
   */
  readonly global?: boolean;
  /**
   * Dependency name
   */
  readonly dependencyName: string;
  readonly scope?: {};
}
