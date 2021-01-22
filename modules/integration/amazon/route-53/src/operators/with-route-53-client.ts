import type { Route53Client } from '@aws-sdk/client-route-53';
import { withAwsClient } from '@komore/integration-amazon';
import { createRoute53Client } from '../create-route-53-client';

/**
 * Adds a Route 53 client to a message
 * @param route53Client Route 53 client
 * @returns Operator function that turns a message into a message with a Route 53 client
 */
export const withRoute53Client = (route53Client?: Route53Client) =>
  withAwsClient('route-53', route53Client ?? createRoute53Client());
