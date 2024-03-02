import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createHash } from '@komore/cryptography';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const hash = createHash({ hashAlgorithm: 'SHA-256' });
  const result$ = hash('hello world');
  const result = await firstValueFrom(result$);
  console.log('hash', result);
}

main();
