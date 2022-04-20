import { LanguageServiceClient } from '@google-cloud/language';
import { type CloudNaturalLanguageClient } from './cloud-natural-language-client';
import { type CloudNaturalLanguageClientOptions } from './cloud-natural-language-client-options';

/**
 * Creates a Cloud Natural Language client
 *
 * @param clientOptions Client options
 * @returns Cloud Natural Language client
 */
export function createCloudNaturalLanguageClient(
  clientOptions?: CloudNaturalLanguageClientOptions
): CloudNaturalLanguageClient {
  const client = new LanguageServiceClient(clientOptions);
  return {
    client,
  };
}
