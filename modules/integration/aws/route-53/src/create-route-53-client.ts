import { Route53Client, type Route53ClientConfig } from '@aws-sdk/client-route-53';

/**
 * Creates a Route 53 client
 * @param configuration Configuration
 * @returns Route 53 client
 */
export function createRoute53Client(configuration?: Route53ClientConfig): Route53Client {
  return new Route53Client(configuration ?? {});
}
