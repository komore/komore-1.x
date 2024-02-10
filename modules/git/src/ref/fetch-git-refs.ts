import { redactValue } from '@komore/reactive';

import { type GitCliClient } from '../git-cli-client';
import { type FetchGitRefsOptions } from './fetch-git-refs-options';

/**
 * Creates a function that fetches references from one or more other repositories
 *
 * @param cliClient Git CLI client
 * @returns Function that fetches references from one or more other repositories
 * @see {@link https://git-scm.com/docs/git-fetch git fetch}
 */
export function fetchGitRefs(cliClient: GitCliClient): (options: FetchGitRefsOptions) => Observable<void> {
  return options => {
    const { depth, prune = {} } = options;
    const pruneReferences = prune.references ?? false;
    const pruneTags = prune.tags ?? false;
    return cliClient([
      'fetch',
      ...(depth !== undefined ? [`--depth=${depth}`] : []),
      ...(pruneReferences ? ['--prune'] : []),
      ...(pruneTags ? ['--prune-tags'] : []),
    ]).pipe(redactValue());
  };
}
