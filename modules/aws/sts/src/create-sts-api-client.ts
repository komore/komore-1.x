import {
  awsApiClientFormParametersStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientStaticUrlStrategy,
  awsApiClientXmlResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type StsApiClient } from './sts-api-client';
import { type StsApiClientOptions } from './sts-api-client-options';

/**
 * Creates a Security Token Service API client
 *
 * @param clientOptions Security Token Service API client options
 * @returns Security Token Service API client
 */
export function createStsApiClient(clientOptions: StsApiClientOptions): StsApiClient {
  const { xmlParser, ...awsClientOptions } = clientOptions;
  const service = 'sts';
  const url = new URL('https://sts.amazonaws.com/');
  const Version = '2011-06-15';
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters: awsApiClientFormParametersStrategy({ additionalParameters: { Version } }),
      result: [awsApiClientXmlResultStrategy({ xmlParser })],
      signature: awsApiClientHeaderSignatureStrategy({}),
      url: awsApiClientStaticUrlStrategy({ url }),
    },
  });
}
