import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createHttpClient } from '@komore/http/client';
import { createGitLabApiClient } from '@komore/gitlab';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const token = 'glpat-B1Hu5HMSzz1LWWzLfLmo';
  const httpClient = createHttpClient();
  const apiClient = createGitLabApiClient({ httpClient, token });
  const result$ = apiClient.query('currentUser');
  const result = await firstValueFrom(result$);
  console.log('res', result, JSON.stringify(result, undefined, 2));
}

main();
