import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createSlackApiClient } from '@komore/slack';
import { createHttpClient } from '@komore/http/client';

async function main() {
  const token = 'abcd';
  const httpClient = createHttpClient();
  const apiClient = createSlackApiClient({ httpClient, token });
  apiClient;
}

main();
