import { entriesToObject, isDefined } from '@komore/functional';
import { stringToMatchesWith } from '@komore/string';

import { validateGitCommitHash } from '../commit/hash/validate-git-commit-hash';
import { type GitVersionBuildOptions } from './git-version-build-options';

/**
 * Returns Git version build options, given Git CLI build option lines
 *
 * @param lines Git CLI build option lines
 * @returns Git version build options
 * @private
 */
export function gitCliBuildOptionLinesToBuildOptions(lines: ReadonlyArray<string>): GitVersionBuildOptions {
  type Matches = readonly [matched: string, name: GitCliBuildOptionKey, value: string];
  const toMatches = stringToMatchesWith<Matches>(/^([^:]+): (.+)$/);
  const entries = lines
    .map(toMatches)
    .filter(isDefined)
    .map(([, name, value]) => [name, value] as const);
  const features = entries.filter(([name]) => name === 'feature').map(([, feature]) => feature);
  const options = entriesToObject(entries);
  const {
    'built from commit': commit,
    cpu,
    'shell-path': shellPath,
    'sizeof-long': longString,
    'sizeof-size_t': sizeString,
  } = options;
  const long = Number(longString);
  const size_t = Number(sizeString);

  validateGitCommitHash(commit);

  return {
    commit,
    cpu,
    features,
    shellPath,
    sizeof: {
      long,
      size_t,
    },
  };
}

/**
 * Git CLI version information
 *
 * @private
 */
type GitCliBuildOptionKey = 'built from commit' | 'cpu' | 'feature' | 'shell-path' | 'sizeof-long' | 'sizeof-size_t';
