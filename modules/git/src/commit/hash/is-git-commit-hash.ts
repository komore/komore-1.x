import { type GitCommitHash } from './git-commit-hash';

/**
 * Tests whether a string is a Git commit hash
 *
 * @param value Value
 * @returns true if the value is a Git commit hash
 */
export function isGitCommitHash(value: string): value is GitCommitHash {
  return 4 <= value.length && value.length <= 40;
}
