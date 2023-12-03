import { FaceClient as AzureSdkFaceClient } from '@azure/cognitiveservices-face';
import { type ServiceClientCredentials, type ServiceClientOptions } from '@azure/ms-rest-js';

import { type FaceClient } from './face-client';
import { type FaceClientOptions } from './face-client-options';

/**
 * Creates a Face client
 *
 * @param clientOptions Face client options
 * @returns Face client
 */
export function createFaceClient(clientOptions: FaceClientOptions): FaceClient {
  const { endpointUrl } = clientOptions;
  const credentials = void 0 as unknown as ServiceClientCredentials;
  const endpoint = endpointUrl.toString();
  const options = void 0 as unknown as ServiceClientOptions;
  const client = new AzureSdkFaceClient(credentials, endpoint, options);
  client;
  return {};
}
