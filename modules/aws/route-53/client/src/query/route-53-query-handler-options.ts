import { type Route53ApiClient } from '@komore/aws/route-53';

/**
 * Route 53 query handler options
 */
export interface Route53QueryHandlerOptions {
  /**
   * Route 53 API client
   */
  readonly apiClient: Route53ApiClient;
}
