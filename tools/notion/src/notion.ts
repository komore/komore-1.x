import { createHttpClient } from '@komore/http/client';
import { createNotionApiClient, getNotionBotUser, getNotionUsers, searchNotionObjects } from '@komore/notion';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const apiToken = 'secret_9ApudzTbFCiEPpOB3lJVJjewMaeAWC6HDNqlARIrDJ1';
  const httpClient = createHttpClient({});
  const apiClient = createNotionApiClient({ apiToken, httpClient });
  const user$ = getNotionBotUser(apiClient)();
  const user = await firstValueFrom(user$);
  console.log(`Authenticated as ${user.type} named "${user.name}"`);

  const users$ = getNotionUsers(apiClient)({ page_size: 10 });
  const users = await firstValueFrom(users$);
  console.log('Users:');
  for (const u of users.results) {
    console.log(`- ${u.name} (${u.type})`);
  }

  const searchResults$ = searchNotionObjects(apiClient)({
    filter: { property: 'object', value: 'object' },
    query: 'komore',
  });
  const searchResults = await firstValueFrom(searchResults$);
  console.log('Search Results:');
  for (const r of searchResults.results) {
    console.log('result', r);
  }
}

main();
