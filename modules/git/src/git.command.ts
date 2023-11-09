import { commandProperties, createCommandType } from '@komore/command';

import { type GitFetchCommandParameters } from './command/git-fetch-command-parameters';
import { gitDomain } from './git.domain';

/**
 * Git command
 */
export const gitCommand = createCommandType(gitDomain, {
  /**
   * Downloads objects and refs from another repository
   *
   * @see {@link https://git-scm.com/docs/git-fetch git fetch}
   */
  fetch: commandProperties<GitFetchCommandParameters>(),
  /**
   * Creates an empty Git repository
   */
  init: commandProperties<unknown>(),
  /**
   * Updates remote refs along with associated objects
   *
   * @see {@link https://git-scm.com/docs/git-push git push}
   */
  push: commandProperties<unknown>(),
});
