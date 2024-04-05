import { createClient } from '@komore/client';

import { createRoute53CommandHandler } from '../command/create-route-53-command-handler';
import { createRoute53QueryHandler } from '../query/create-route-53-query-handler';
import { route53Command } from '../route-53.command';
import { route53Event } from '../route-53.event';
import { route53Error } from '../route-53.error';
import { route53Query } from '../route-53.query';
import { type Route53Client } from './route-53-client';
import { route53ClientCommandEventMap } from './route-53-client-command-event-map';
import { type Route53ClientOptions } from './route-53-client-options';

/**
 * Creates a Route 53 client
 *
 * @param clientOptions Route 53 client options
 * @returns Route 53 client
 */
export function createRoute53Client(clientOptions: Route53ClientOptions): Route53Client {
  const { apiClient } = clientOptions;
  return createClient({
    command: route53Command,
    commandEventMap: route53ClientCommandEventMap,
    commandHandler: ({ toEvents }) => createRoute53CommandHandler({ apiClient, toEvents }),
    event: route53Event,
    error: route53Error,
    query: route53Query,
    queryHandler: () => createRoute53QueryHandler({ apiClient }),
  });
}
