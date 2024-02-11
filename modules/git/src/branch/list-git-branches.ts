import { arrayToArrayFiltered, each } from '@komore/collection';
import { map } from '@komore/reactive';
import { not } from '@komore/functional';
import { isEmptyString, stringToLines, stringToTrimmedString } from '@komore/string';

import { type GitCliClient } from '../git-cli-client';
import { type GitBranch } from './git-branch';
import { gitCliBranchLineToGitBranch } from './git-cli-branch-line-to-git-branch';
import { type ListGitBranchesOptions } from './list-git-branches-options';

/**
 * Creates a function that lists Git branches
 *
 * @param cliClient Git CLI client
 * @returns Function that lists Git branches
 */
export function listGitBranches(
  cliClient: GitCliClient
): (options: ListGitBranchesOptions) => Observable<ReadonlyArray<GitBranch>> {
  const baseParameters = ['branch', '--list', '-vv', '--no-abbrev', '--color=never'];
  return () =>
    cliClient(baseParameters).pipe(
      map(stringToLines()),
      map(each(stringToTrimmedString)),
      map(arrayToArrayFiltered(not(isEmptyString))),
      map(each(gitCliBranchLineToGitBranch()))
    );
}
