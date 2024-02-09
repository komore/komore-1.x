import { type GitVersionBuildOptions } from './git-version-build-options';

/**
 * Git version
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
