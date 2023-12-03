import { ContentModeratorClient as AzureSdkContentModeratorClient } from '@azure/cognitiveservices-contentmoderator';
import { type ServiceClientCredentials, type ServiceClientOptions } from '@azure/ms-rest-js';

import { type ContentModeratorClient } from './content-moderator-client';
import { type ContentModeratorClientOptions } from './content-moderator-client-options';

/**
 * Creates a Content Moderator client
 *
 * @param clientOptions Content Moderator client options
 * @returns Content Moderator client
 */
export function createContentModeratorClient(clientOptions: ContentModeratorClientOptions): ContentModeratorClient {
  const { endpointUrl } = clientOptions;
  // TODO
  const credentials = void 0 as unknown as ServiceClientCredentials;
  const endpoint = endpointUrl.toString();
  const options = void 0 as unknown as ServiceClientOptions;
  const client = new AzureSdkContentModeratorClient(credentials, endpoint, options);
  client;
  return {};
}
