import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createHttpClient } from '@komore/http/client';
import {
  asNotionPageId,
  createNotionApiClient,
  getNotionBotUser,
  getNotionUsers,
  searchNotionObjects,
} from '@komore/notion';
import { firstValueFrom } from '@komore/reactive';
import { createNotionReleasePage } from './create-notion-release-page';

async function main() {
  const httpClient = createHttpClient({});
  const token = 'secret_9ApudzTbFCiEPpOB3lJVJjewMaeAWC6HDNqlARIrDJ1';
  const pageId = asNotionPageId('b72fda2c4a744d6da82603b2f8f37b7d');
  const apiClient = createNotionApiClient({ httpClient, token });
  const user$ = getNotionBotUser(apiClient)();
  const user = await firstValueFrom(user$);

  console.log(`Authenticated as ${user.type} named "${user.name}"`);

  const users$ = getNotionUsers(apiClient)({ page_size: 10 });
  const users = await firstValueFrom(users$);
  console.log('Users:');
  for (const u of users.results) {
    console.log(`- ${u.name} (${u.type})`);
  }

  const result$ = createNotionReleasePage({ apiClient, pageId });
  result$;

  const searchResults$ = searchNotionObjects(apiClient)({
    filter: { property: 'object', value: 'page' },
    query: 'delivery',
  });
  const searchResults = await firstValueFrom(searchResults$);
  console.log('Search Results:');
  for (const r of searchResults.results) {
    console.log('result', r);
  }
}

main();
