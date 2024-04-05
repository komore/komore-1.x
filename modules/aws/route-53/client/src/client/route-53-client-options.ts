import { type Route53ApiClient } from '@komore/aws/route-53';

/**
 * Route 53 client options
 */
export interface Route53ClientOptions {
  /**
   * Route 53 API client
   */
  readonly apiClient: Route53ApiClient;
}
