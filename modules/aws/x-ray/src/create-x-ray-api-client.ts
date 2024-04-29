import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type XRayApiClient } from './x-ray-api-client';
import { type XRayApiClientOptions } from './x-ray-api-client-options';

/**
 * Creates an X-Ray API client
 *
 * @param clientOptions X-Ray API client options
 * @returns X-Ray API client
 */
export function createXRayApiClient(clientOptions: XRayApiClientOptions): XRayApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'xray';
  const targetPrefix = 'xray';
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters: awsApiClientJsonParametersStrategy({ targetPrefix }),
      result: [awsApiClientJsonResultStrategy({})],
      signature: awsApiClientHeaderSignatureStrategy({}),
      url: awsApiClientDefaultUrlStrategy(),
    },
  });
}
