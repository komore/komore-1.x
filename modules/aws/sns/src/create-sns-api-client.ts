import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientQueryParametersSignatureStrategy,
  awsApiClientQueryParametersStrategy,
  awsApiClientXmlResultStrategy,
  createAwsApiClient,
} from '@komore/aws';
import { createXmlParser } from '@komore/xml';

import { type SnsApiClient } from './sns-api-client';
import { type SnsApiClientOptions } from './sns-api-client-options';

/**
 * Creates an SNS API client
 *
 * @param clientOptions SNS API client options
 * @returns SNS API client
 */
export function createSnsApiClient(clientOptions: SnsApiClientOptions): SnsApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'sns';
  const Version = '2010-03-31';
  const xmlParser = createXmlParser({});
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters: awsApiClientQueryParametersStrategy({ additionalParameters: { Version } }),
      result: [awsApiClientXmlResultStrategy({ xmlParser })],
      signature: awsApiClientQueryParametersSignatureStrategy({}),
      url: awsApiClientDefaultUrlStrategy(),
    },
  });
}
