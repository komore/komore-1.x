import { type GitCommitHash } from './git-commit-hash';
import { validateGitCommitHash } from './validate-git-commit-hash';

/**
 * Safely casts a value to a Git commit hash
 *
 * @param value Value
 * @returns Git commit hash
 */
export function asGitCommitHash(value: string): GitCommitHash {
  validateGitCommitHash(value);
  return value;
}
