import { type GitCommitHash } from './git-commit-hash';
import { maxGitCommitHashLength } from './max-git-commit-hash-length';
import { minGitCommitHashLength } from './min-git-commit-hash-length';

/**
 * Tests whether a string is a Git commit hash
 *
 * @param value Value
 * @returns true if the value is a Git commit hash
 */
export function isGitCommitHash(value: string): value is GitCommitHash {
  return minGitCommitHashLength <= value.length && value.length <= maxGitCommitHashLength;
}
