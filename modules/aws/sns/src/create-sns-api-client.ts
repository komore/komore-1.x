import {
  awsApiClientQueryParametersSignatureStrategy,
  awsApiClientQueryParametersStrategy,
  awsApiClientTargetPrefixParametersStrategy,
  awsApiClientXmlResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

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
  return createAwsApiClient({
    ...awsClientOptions,
    service: 'sns',
    strategies: {
      parameters: [
        awsApiClientTargetPrefixParametersStrategy('sns'),
        awsApiClientQueryParametersStrategy({ Version: '2010-03-31' }),
      ],
      result: [awsApiClientXmlResultStrategy()],
      signature: awsApiClientQueryParametersSignatureStrategy(),
    },
  });
}
