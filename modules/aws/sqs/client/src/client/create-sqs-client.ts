import { createClient } from '@komore/client';

import { createSqsCommandHandler } from '../command/create-sqs-command-handler';
import { createSqsQueryHandler } from '../query/create-sqs-query-handler';
import { sqsCommand } from '../sqs.command';
import { sqsQuery } from '../sqs.query';
import { sqsError } from '../sqs.error';
import { sqsEvent } from '../sqs.event';
import { type SqsClient } from './sqs-client';
import { sqsClientCommandEventMap } from './sqs-client-command-event-map';
import { type SqsClientOptions } from './sqs-client-options';

/**
 * Creates an SQS client
 *
 * @param clientOptions SQS client options
 * @returns SQS client
 */
export function createSqsClient(clientOptions: SqsClientOptions): SqsClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: sqsCommand,
    commandEventMap: sqsClientCommandEventMap,
    commandHandler: ({ toEvents }) => createSqsCommandHandler({ apiClient, toEvents }),
    error: sqsError,
    event: sqsEvent,
    query: sqsQuery,
    queryHandler: () => createSqsQueryHandler({ apiClient }),
  });
}
