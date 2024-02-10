import { map } from '@komore/reactive';
import { stringToTrimmedString } from '@komore/string';

import { type GitCliClient } from '../git-cli-client';
import { asGitBranchName } from './name/as-git-branch-name';
import { type GitBranchName } from './name/git-branch-name';

/**
 * Creates a function that returns the current Git branch name
 *
 * @param cliClient Git CLI client
 * @returns Function that returns the current Git branch name
 */
export function getCurrentGitBranchName(cliClient: GitCliClient): () => Observable<GitBranchName> {
  return () => cliClient(['branch', '--show-current']).pipe(map(stringToTrimmedString), map(asGitBranchName));
}
