import { httpClientResponseToJson } from '@komore/http/client';
import { mergeMap } from '@komore/reactive';

import { type AwsApiNormalSchema } from './aws-api-normal-schema';
import { type AwsApiNormalSchemaExtractor } from './aws-api-normal-schema-extractor';
import { type AwsApiNormalSchemaExtractorOptions } from './aws-api-normal-schema-extractor-options';

/**
 * Creates a function that extracts an AWS API's normal schema
 *
 * @param extractorOptions Extractor options
 * @returns Function that extracts an AWS API's normal schema
 */
export function createAwsApiNormalSchemaExtractor(
  extractorOptions: AwsApiNormalSchemaExtractorOptions
): AwsApiNormalSchemaExtractor {
  const { endpointUrl = new URL('https://raw.githubusercontent.com/aws/aws-sdk-js/master/apis/'), httpClient } =
    extractorOptions;
  return (api, version) => {
    const resourcePath = `${api}-${version}.normal.json`;
    const url = new URL(resourcePath, endpointUrl);
    return httpClient({ url }).pipe(mergeMap(httpClientResponseToJson<AwsApiNormalSchema>()));
  };
}
