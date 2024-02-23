import { createClient } from '@komore/client';

import { apiGatewayCommand } from '../api-gateway.command';
import { apiGatewayError } from '../api-gateway.error';
import { apiGatewayEvent } from '../api-gateway.event';
import { apiGatewayQuery } from '../api-gateway.query';
import { apiGatewayClientCommandEventMap } from './api-gateway-client-command-event-map';
import { type ApiGatewayClient } from './api-gateway-client';
import { type ApiGatewayClientOptions } from './api-gateway-client-options';

/**
 * Creates an API gateway client
 *
 * @param clientOptions API Gateway client options
 * @returns API gateway client
 */
export function createApiGatewayClient(clientOptions: ApiGatewayClientOptions): ApiGatewayClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: apiGatewayCommand,
    commandEventMap: apiGatewayClientCommandEventMap,
    commandHandler: toEvents => createApiGatewayCommandHandler({ apiClient, toEvents }),
    error: apiGatewayError,
    event: apiGatewayEvent,
    query: apiGatewayQuery,
    queryHandler: () => createApiGatewayQueryHandler({ apiClient }),
  });
}
