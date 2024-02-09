import { redactValue } from '@komore/reactive';

import { type GitCliClient } from '../git-cli-client';
import { type MoveGitBranchOptions } from './move-git-branch-options';

/**
 * Creates a function that moves/renames a Git branch
 *
 * @param cliClient Git CLI client
 * @returns Function that moves/renames a Git branch
 */
export function moveGitBranch(cliClient: GitCliClient): (moveOptions: MoveGitBranchOptions) => Observable<void> {
  return ({ force, newBranchName, oldBranchName }) =>
    cliClient([
      'branch',
      force ? '-m' : '-M',
      ...(oldBranchName !== undefined ? [oldBranchName] : []),
      newBranchName,
    ]).pipe(redactValue());
}
