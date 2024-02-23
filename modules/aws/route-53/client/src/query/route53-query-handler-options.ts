import { type Route53Client } from '@aws-sdk/client-route-53';

/**
 * Route 53 query handler options
 */
export interface Route53QueryHandlerOptions {
  /**
   * Route 53 client
   */
  readonly client: Route53Client;
}
