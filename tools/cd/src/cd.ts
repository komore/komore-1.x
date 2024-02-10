import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createChangeLogGenerator } from '@komore/cd/change-log';
import { createGitCliClient } from '@komore/git';
import { getCurrentWorkingDirectory } from '@komore/node/process';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const workingDirectory = getCurrentWorkingDirectory();
  const gitCliClient = createGitCliClient({ workingDirectory });
  const generator = createChangeLogGenerator({ applicationName: 'komore', gitCliClient });

  const result$ = generator({});
  const result = await firstValueFrom(result$);
  console.log('result', result);
}

main();
