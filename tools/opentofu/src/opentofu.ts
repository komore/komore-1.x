import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createOpenTofuCliClient, getOpenTofuVersion } from '@komore/opentofu';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const cliClient = createOpenTofuCliClient({ commandName: 'terraform', workingDirectory: '.' });
  const version$ = getOpenTofuVersion(cliClient)();
  const version = await firstValueFrom(version$);
  console.log('OpenTofu version', version);
}

main();
