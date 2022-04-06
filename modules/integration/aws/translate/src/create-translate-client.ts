import { TranslateClient, type TranslateClientConfig } from '@aws-sdk/client-translate';

/**
 * Creates an Translate client
 * @param configuration Configuration
 * @returns Translate client
 */
export function createTranslateClient(configuration?: TranslateClientConfig): TranslateClient {
  return new TranslateClient(configuration ?? {});
}
