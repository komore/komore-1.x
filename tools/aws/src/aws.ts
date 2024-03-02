import '@komore/reactive/polyfill';
import '@komore/temporal/polyfill';

//import { createAwsApiNormalSchemaExtractor, awsApiSchemasToHttpApi } from '@komore/aws/api';
import { createDynamoDBApiClient, listDynamoDBTables } from '@komore/aws/dynamodb';
import { createHttpClient } from '@komore/http/client';
//import { createTypeScriptHttpApiClientGenerator } from '@komore/http/client/generator';
import { firstValueFrom } from '@komore/reactive';
//import { getAwsCliConfig } from '@komore/aws/cli';

async function main() {
  const httpClient = createHttpClient({});
  const dynamoDBApiClient = createDynamoDBApiClient({
    credentials: {
      accessKeyId: 'AKIA3ITLDHO4QF46TXJ3',
      secretAccessKey: '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',
    },
    environmentVariables: process.env,
    httpClient,
  });
  const listTables = listDynamoDBTables(dynamoDBApiClient);

  const tables$ = listTables({});
  const tables = await firstValueFrom(tables$);

  console.log('tables', typeof tables, tables);
  /*
  const outputPath = 'tools/aws/src/test';
  const generator = createTypeScriptHttpApiClientGenerator({ outputPath });
  const extractor = createAwsApiNormalSchemaExtractor({ httpClient });

  const normal$ = extractor('sqs', '2012-11-05');
  const normal = await firstValueFrom(normal$);
  const { operations: _1, shapes: _2, ...remainingNormal } = normal;
  console.log('AWS normal', remainingNormal);

  const httpApi = awsApiSchemasToHttpApi({ normal });
  const result$ = generator(httpApi);
  const result = await firstValueFrom(result$);
  console.log('result', result);

  const cliConfig$ = getAwsCliConfig();
  const cliConfig = await firstValueFrom(cliConfig$);
  console.log('CLI config', cliConfig);
  */
}

main();
