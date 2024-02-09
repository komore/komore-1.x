import { gitTypeError } from '../../git-type.error';
import { type GitBranchName } from './git-branch-name';
import { isGitBranchName } from './is-git-branch-name';

/**
 * Validates that a value is a valid Git branch name
 *
 * @param value Value
 */
export function validateGitBranchName(value: string): asserts value is GitBranchName {
  if (!isGitBranchName(value)) {
    throw gitTypeError.invalidBranchName({ branchName: value });
  }
}
