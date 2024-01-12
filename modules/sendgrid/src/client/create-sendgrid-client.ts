import { createClient } from '@komore/client';

import { createSendGridApiClient } from '../api/create-sendgrid-api-client';
import { createSendGridCommandHandler } from '../command/create-sendgrid-command-handler';
import { createSendGridQueryHandler } from '../query/create-sendgrid-query-handler';
import { sendGridCommand } from '../sendgrid.command';
import { sendGridError } from '../sendgrid.error';
import { sendGridEvent } from '../sendgrid.event';
import { sendGridQuery } from '../sendgrid.query';
import { type SendGridClient } from './sendgrid-client';
import { type SendGridClientOptions } from './sendgrid-client-options';
import { sendGridCommandEventMap } from './sendgrid-command-event-map';

/**
 * Creates a SendGrid client
 *
 * @param apiKey API key
 * @param endpointUrl Endpoint URL
 * @returns SendGrid client
 */
export function createSendGridClient(clientOptions: SendGridClientOptions): SendGridClient {
  const { apiKey, endpointUrl = new URL('https://api.sendgrid.com/v3/'), httpClient } = clientOptions;
  const apiClient = createSendGridApiClient({ apiKey, endpointUrl, httpClient });
  return createClient({
    command: sendGridCommand,
    commandEventMap: sendGridCommandEventMap,
    commandHandler: toEvents => createSendGridCommandHandler({ apiClient, toEvents }),
    error: sendGridError,
    event: sendGridEvent,
    query: sendGridQuery,
    queryHandler: () => createSendGridQueryHandler({ apiClient }),
  });
}
