import { type EToroApiClient } from '@/etoro';

/**
 * eToro client options
 */
export interface EToroClientOptions {
  /**
   * API client
   */
  readonly apiClient: EToroApiClient;
}
