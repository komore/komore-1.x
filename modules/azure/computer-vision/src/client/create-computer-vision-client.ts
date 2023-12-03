import { ComputerVisionClient as AzureSdkComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { type ServiceClientCredentials, type ServiceClientOptions } from '@azure/ms-rest-js';

import { type ComputerVisionClient } from './computer-vision-client';
import { type ComputerVisionClientOptions } from './computer-vision-client-options';

/**
 * Creates a Computer Vision client
 *
 * @param clientOptions Computer Vision client options
 * @returns Computer Vision client
 */
export function createComputerVisionClient(clientOptions: ComputerVisionClientOptions): ComputerVisionClient {
  const { endpointUrl } = clientOptions;
  // TODO
  const credentials = void 0 as unknown as ServiceClientCredentials;
  const endpoint = endpointUrl.toString();
  const options = void 0 as unknown as ServiceClientOptions;
  const client = new AzureSdkComputerVisionClient(credentials, endpoint, options);
  client;
  return {};
}
