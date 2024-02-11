import { arrayToArrayFiltered, each } from '@komore/collection';
import { not } from '@komore/functional';
import { map } from '@komore/reactive';
import { isEmptyString, stringToLines, stringToTrimmedString } from '@komore/string';

import { type GitCliClient } from '../git-cli-client';
import { type GitCommitSummary } from './git-commit-summary';
import { type ListGitCommitsOptions } from './list-git-commits-options';
import { gitCliCommitLineToGitCommitSummary } from './git-cli-commit-line-to-git-commit-summary';
import { gitRevisionRangeToString } from '../revision/git-revision-range-to-string';

/**
 * Creates a function that returns a list of Git commits
 *
 * @param cliClient Git CLI client
 * @returns Function that returns a list of Git commits
 */
export function listGitCommits(
  cliClient: GitCliClient
): (options: ListGitCommitsOptions) => Observable<ReadonlyArray<GitCommitSummary>> {
  const baseParameters = ['log', '--pretty=oneline', '--color=never'];
  return options => {
    const { range } = options;
    return cliClient([...baseParameters, ...(range !== undefined ? [gitRevisionRangeToString(range)] : [])]).pipe(
      map(stringToLines()),
      map(each(stringToTrimmedString)),
      map(arrayToArrayFiltered(not(isEmptyString))),
      map(each(gitCliCommitLineToGitCommitSummary()))
    );
  };
}
