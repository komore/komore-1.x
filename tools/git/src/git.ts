import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createGitCliClient, getGitVersion } from '@komore/git';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const cliClient = createGitCliClient({ workingDirectory: '.' });
  const version$ = getGitVersion(cliClient)();
  const version = await firstValueFrom(version$);
  console.log('hm', version);
}

main();
