import { createAwsApiNormalSchemaExtractor, awsApiSchemasToHttpApi } from '@komore/aws/api';
import { createTypeScriptHttpApiClientGenerator } from '@komore/http/client/generator';
import { getAwsCliConfig } from '@komore/aws/cli';
import { HttpClient } from '@komore/http/client';
import { firstValueFrom } from '@komore/reactive';

export async function getApi(httpClient: HttpClient) {
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
}
