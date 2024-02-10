import { feature } from '@komore/testing';

import { gitCliBranchLineToBranch } from './git-cli-branch-line-to-branch';

feature('Git CLI branch line to branch', {
  'can determine when a branch is the current branch'() {
    gitCliBranchLineToBranch;
  },
});
