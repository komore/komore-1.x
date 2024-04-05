import {
  awsApiClientHeaderSignatureStrategy,
  awsApiClientStaticUrlStrategy,
  awsApiClientXmlParametersStrategy,
  awsApiClientXmlResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type Route53ApiClient } from './route-53-api-client';
import { type Route53ApiClientOptions } from './route-53-api-client-options';

/**
 * Creates a Route 53 API client
 *
 * @param clientOptions Route 53 API client options
 * @returns Route 53 API client
 */
export function createRoute53ApiClient(clientOptions: Route53ApiClientOptions): Route53ApiClient {
  const { xmlParser, ...awsClientOptions } = clientOptions;
  const expectedXmlNamespace = new URL('https://route53.amazonaws.com/doc/2013-04-01/');
  const url = new URL('https://route53.amazonaws.com/2013-04-01/');
  return createAwsApiClient({
    ...awsClientOptions,
    service: 'route53',
    strategies: {
      parameters: awsApiClientXmlParametersStrategy({ xmlParser }),
      result: [awsApiClientXmlResultStrategy({ expectedXmlNamespace, xmlParser })],
      signature: awsApiClientHeaderSignatureStrategy({}),
      url: awsApiClientStaticUrlStrategy({ url }),
    },
  });
}
