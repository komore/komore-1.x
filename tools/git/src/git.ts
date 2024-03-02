import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createGitCliClient, getCurrentGitBranchName, getGitVersion, listGitBranches } from '@komore/git';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const cliClient = createGitCliClient({ workingDirectory: '.' });
  const version$ = getGitVersion(cliClient)();
  const version = await firstValueFrom(version$);
  console.log('Git version:', version.name);
  const branches$ = listGitBranches(cliClient)({});
  const branches = await firstValueFrom(branches$);
  console.log('Git branches:', branches);
  const currentBranchName$ = getCurrentGitBranchName(cliClient)();
  const currentBranchName = await firstValueFrom(currentBranchName$);
  console.log('Git current branch name:', currentBranchName);
}

main();
