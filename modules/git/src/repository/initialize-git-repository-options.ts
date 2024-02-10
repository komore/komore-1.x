import { type GitBranchName } from '../branch/name/git-branch-name';

/**
 * Initialize Git repository options
 *
 * @see {@link https://git-scm.com/docs/git-init git init}
 */
export interface InitializeGitRepositoryOptions {
  /**
   * Initial branch name for the newly created repository
   *
   * @note Defaults to the default name, e.g. `'main'` (configurable via `init.defaultBranch`)
   */
  readonly initialBranchName?: GitBranchName;
  /**
   * Object format, or hash algorithm
   *
   * @note Defaults to `'sha1'`
   */
  readonly objectFormat?: 'sha1' | 'sha256';
}
