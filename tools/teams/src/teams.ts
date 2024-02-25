import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createHttpClient } from '@komore/http/client';
import { createMsGraphApiClient } from '@komore/msgraph';
import { createTeamsApiClient } from '@komore/teams';

async function main() {
  const httpClient = createHttpClient();
  const msGraphApiClient = createMsGraphApiClient({ httpClient });
  const teamsClient = createTeamsApiClient({ msGraphApiClient });
  teamsClient;
}

main();
