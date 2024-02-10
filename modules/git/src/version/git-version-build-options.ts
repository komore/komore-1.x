import { type GitCommitHash } from '../commit/hash/git-commit-hash';

/**
 * Git version build options
 *
 * @see {@link https://git-scm.com/docs/git-version git version}
 */
export interface GitVersionBuildOptions {
  /**
   * Commit used for the build
   */
  readonly commit: GitCommitHash;
  /**
   * CPU architecture
   */
  readonly cpu: string;
  /**
   * List of features
   */
  readonly features: ReadonlyArray<string>;
  /**
   * Shell path
   */
  readonly shellPath: string;
  /**
   * Type sizes
   */
  readonly sizeof: {
    /**
     * Size of long variables
     */
    readonly long: number;
    /**
     * Size of size_t variables
     */
    readonly size_t: number;
  };
}
