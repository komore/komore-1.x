import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createOpenTofuCliClient } from '@komore/opentofu';

async function main() {
  const cliClient = createOpenTofuCliClient({ commandLine: 'terraform', workingDirectory: '.' });
}

main();
