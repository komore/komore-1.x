import { createClient } from '@komore/client';

import { createSendGridCommandHandler } from '../command/create-sendgrid-command-handler';
import { createSendGridQueryHandler } from '../query/create-sendgrid-query-handler';
import { sendGridCommand } from '../sendgrid.command';
import { sendGridError } from '../sendgrid.error';
import { sendGridEvent } from '../sendgrid.event';
import { sendGridQuery } from '../sendgrid.query';
import { type SendGridClient } from './sendgrid-client';
import { type SendGridClientOptions } from './sendgrid-client-options';
import { sendGridClientCommandEventMap } from './sendgrid-client-command-event-map';

/**
 * Creates a SendGrid client
 *
 * @param clientOptions SendGrid client options
 * @returns SendGrid client
 */
export function createSendGridClient(clientOptions: SendGridClientOptions): SendGridClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: sendGridCommand,
    commandEventMap: sendGridClientCommandEventMap,
    commandHandler: toEvents => createSendGridCommandHandler({ apiClient, toEvents }),
    error: sendGridError,
    event: sendGridEvent,
    query: sendGridQuery,
    queryHandler: () => createSendGridQueryHandler({ apiClient }),
  });
}
