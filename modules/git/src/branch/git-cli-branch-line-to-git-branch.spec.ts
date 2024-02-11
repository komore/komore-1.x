import { feature } from '@komore/testing';

import { gitCliBranchLineToGitBranch } from './git-cli-branch-line-to-git-branch';

feature('Git CLI branch line to Git branch', {
  'can determine when a branch is the current branch'() {
    gitCliBranchLineToGitBranch;
  },
});
