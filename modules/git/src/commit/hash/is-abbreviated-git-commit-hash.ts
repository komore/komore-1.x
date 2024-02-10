import { type GitCommitHash } from './git-commit-hash';
import { maxGitCommitHashLength } from './max-git-commit-hash-length';

/**
 * Tests whether a Git commit hash is abbreviated
 *
 * @param hash Git commit hash
 * @returns true if the Git commit hash is abbreviated
 */
export function isAbbreviatedGitCommitHash(hash: GitCommitHash): boolean {
  return hash.length < maxGitCommitHashLength;
}
