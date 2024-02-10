import { arrayToArrayFiltered, each } from '@komore/collection';
import { map } from '@komore/reactive';
import { not } from '@komore/functional';
import { isEmptyString, stringToLines, stringToTrimmedString } from '@komore/string';

import { type GitCliClient } from '../git-cli-client';
import { type GitBranch } from './git-branch';
import { gitCliBranchLineToBranch } from './git-cli-branch-line-to-branch';

/**
 * Creates a function that lists Git branches
 *
 * @param cliClient Git CLI client
 * @returns Function that lists Git branches
 */
export function listGitBranches(cliClient: GitCliClient): () => Observable<ReadonlyArray<GitBranch>> {
  const parameters = ['branch', '--list', '-vv', '--no-abbrev', '--color=never'];
  return () =>
    cliClient(parameters).pipe(
      map(stringToLines()),
      map(each(stringToTrimmedString)),
      map(arrayToArrayFiltered(not(isEmptyString))),
      map(each(gitCliBranchLineToBranch))
    );
}
