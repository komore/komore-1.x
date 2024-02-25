import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

import { createAwsApiNormalSchemaExtractor, awsApiSchemasToHttpApi } from '@komore/aws/api';
import { createHttpClient } from '@komore/http/client';
import { createTypeScriptHttpApiClientGenerator } from '@komore/http/client/generator';
import { firstValueFrom } from '@komore/reactive';

async function main() {
  const outputPath = 'tools/aws/src/test';
  const generator = createTypeScriptHttpApiClientGenerator({ outputPath });
  const httpClient = createHttpClient({});
  const extractor = createAwsApiNormalSchemaExtractor({ httpClient });

  const normal$ = extractor('sqs', '2012-11-05');
  const normal = await firstValueFrom(normal$);
  const { operations: _1, shapes: _2, ...remainingNormal } = normal;
  console.log('AWS normal', remainingNormal);

  const httpApi = awsApiSchemasToHttpApi({ normal });
  const result$ = generator(httpApi);
  const result = await firstValueFrom(result$);
  console.log('result', result);
}

main();
