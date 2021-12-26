import { ContentModeratorClient } from '@azure/cognitiveservices-contentmoderator';
import { type ServiceClientCredentials } from '@azure/core-auth';

/**
 * Environment variables
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_CONTENTMODERATOR_APIKEY: string;
      KMR_INTEGRATION_AZURE_COGNITIVESERVICES_CONTENTMODERATOR_ENDPOINTURL: string;
    }
  }
}

/**
 * Creates a Content Moderator client
 * @param endpointUrl Endpoint URL
 * @param options Options
 * @returns Content Moderator client
 */
export function createContentModeratorClient(
  endpointUrl?: string,
  options?: ServiceClientOptions
): ContentModeratorClient {
  return new ContentModeratorClient(
    credentials,
    endpointUrl ?? process.env.KMR_INTEGRATION_AZURE_COGNITIVESERVICES_CONTENTMODERATOR_ENDPOINTURL,
    options
  );
}
