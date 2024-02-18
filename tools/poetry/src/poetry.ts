import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createPoetryCliClient, getPoetryVersion } from '@komore/poetry';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const cliClient = createPoetryCliClient({ workingDirectory: '.' });
  const version$ = getPoetryVersion(cliClient)();
  const version = await firstValueFrom(version$);
  console.log('version', version);
}

main();
