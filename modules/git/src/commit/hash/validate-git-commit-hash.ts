import { gitTypeError } from '../../git-type.error';
import { type GitCommitHash } from './git-commit-hash';
import { isGitCommitHash } from './is-git-commit-hash';

/**
 * Validates that a string is a valid Git commit hash
 *
 * @param commitHash Git commit hash string
 */
export function validateGitCommitHash(commitHash: string): asserts commitHash is GitCommitHash {
  if (!isGitCommitHash(commitHash)) {
    throw gitTypeError.invalidCommitHash({ commitHash });
  }
}
