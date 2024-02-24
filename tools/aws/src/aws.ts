import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createAwsApiNormalSchemaExtractor } from '@komore/aws/api';
import { createHttpClient } from '@komore/http/client';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const httpClient = createHttpClient({});
  const extractor = createAwsApiNormalSchemaExtractor({ httpClient });
  const api$ = extractor('sqs', '2012-11-05');
  const api = await firstValueFrom(api$);
  console.log('api', api);
}

main();
