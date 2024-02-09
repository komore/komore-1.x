import { type GitCommitHash } from './git-commit-hash';

/**
 * Tests whether a Git commit hash is abbreviated
 *
 * @param hash Git commit hash
 * @returns true if the Git commit hash is abbreviated
 */
export function isAbbreviatedGitCommitHash(hash: GitCommitHash): boolean {
  return hash.length < 40;
}
