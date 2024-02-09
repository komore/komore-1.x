import { map } from '@komore/reactive';

import { type GitCliClient } from '../git-cli-client';
import { type GitBranch } from './git-branch';

/**
 * Creates a function that lists Git branches
 *
 * @param cliClient Git CLI client
 * @returns Function that lists Git branches
 */
export function listGitBranches(cliClient: GitCliClient): () => Observable<ReadonlyArray<GitBranch>> {
  return () =>
    cliClient(['--list', '--verbose']).pipe(
      map(str => console.log('str', str)),
      map(() => [])
    );
}
