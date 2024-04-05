import { type NeptuneApiClient } from '@komore/aws/neptune';

/**
 * Neptune client options
 */
export interface NeptuneClientOptions {
  /**
   * Neptune API client
   */
  readonly apiClient: NeptuneApiClient;
}
