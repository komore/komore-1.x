import { Route53Client as AwsSdkRoute53Client } from '@aws-sdk/client-route-53';

import { createAwsClient } from '@komore/aws';

import { route53Command } from '../route-53.command';
import { route53Event } from '../route-53.event';
import { route53Error } from '../route-53.error';
import { route53Query } from '../route-53.query';
import { type Route53Client } from './route-53-client';
import { type Route53ClientOptions } from './route-53-client-options';
import { route53CommandEventMapping } from './route-53-command-event-mapping';
import { createRoute53CommandHandler } from '../command/create-route-53-command-handler';

/**
 * Creates a Route 53 client
 *
 * @param clientOptions Route 53 client options
 * @returns Route 53 client
 */
export function createRoute53Client(clientOptions: Route53ClientOptions): Route53Client {
  const client = new AwsSdkRoute53Client(clientOptions);
  return createAwsClient({
    client,
    commandHandler: events => createRoute53CommandHandler({ client, events }),
    commandEventMapping: route53CommandEventMapping,
    commandType: route53Command,
    eventType: route53Event,
    errorType: route53Error,
    queryHandler: () => createRoute53QueryHandler({ client }),
    queryType: route53Query,
  });
}
