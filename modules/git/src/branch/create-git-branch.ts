import { type GitCliClient } from '../git-cli-client';
import { type GitBranchName } from './name/git-branch-name';

export function createGitBranch(cliClient: GitCliClient): (branchName: GitBranchName) => Observable<void> {
  return branchName => cliClient(['branch', branchName]);
}
