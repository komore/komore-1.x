import { redactValue } from '@komore/reactive';

import { type GitCliClient } from '../git-cli-client';
import { type InitializeGitRepositoryOptions } from './initialize-git-repository-options';

/**
 * Creates a function that initializes a Git repository
 *
 * @param cliClient Git CLI client
 * @returns Function that initializes a Git repository
 * @see {@link https://git-scm.com/docs/git-init git init}
 */
export function initializeGitRepository(
  cliClient: GitCliClient
): (options: InitializeGitRepositoryOptions) => Observable<void> {
  return ({ initialBranchName, objectFormat }) =>
    cliClient([
      'init',
      ...(initialBranchName ? [`--initial-branch=${initialBranchName}`] : []),
      ...(objectFormat !== undefined ? [`--object-format=${objectFormat}`] : []),
    ]).pipe(redactValue());
}
