import { type GitVersionBuildOptions } from './git-version-build-options';

/**
 * Git version
 *
 * @see {@link https://git-scm.com/docs/git-version git version}
 */
export interface GitVersion {
  /**
   * Build options
   */
  readonly buildOptions: GitVersionBuildOptions;
  /**
   * Version name
   */
  readonly name: string;
}
