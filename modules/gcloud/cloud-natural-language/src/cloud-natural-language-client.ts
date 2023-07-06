import { type LanguageServiceClient } from '@google-cloud/language';

/**
 * Cloud Natural Language client
 */
export interface CloudNaturalLanguageClient {
  /**
   * Cloud Natural Language client
   */
  readonly client: LanguageServiceClient;
}
