import { commandProperties, createCommandType } from '@komore/command';
import { gitDomain, type FetchGitRefsOptions, type InitializeGitRepositoryOptions } from '@komore/git';

/**
 * Git command
 */
export const gitCommand = createCommandType(gitDomain, {
  /**
   * Downloads objects and refs from another repository
   *
   * @see {@link https://git-scm.com/docs/git-fetch git fetch}
   */
  fetch: commandProperties<FetchGitRefsOptions>(),
  /**
   * Creates an empty Git repository
   *
   * @see {@link https://git-scm.com/docs/git-init git init}
   */
  initialize: commandProperties<InitializeGitRepositoryOptions>(),
  /**
   * Updates remote refs along with associated objects
   *
   * @see {@link https://git-scm.com/docs/git-push git push}
   */
  push: commandProperties<unknown>(),
});
