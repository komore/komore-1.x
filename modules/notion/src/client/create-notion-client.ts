import { createClient } from '@komore/client';
import { type NotionClient } from './notion-client';
import { type NotionClientOptions } from './notion-client-options';

import { createNotionCommandHandler } from '../command/create-notion-command-handler';
import { notionCommand } from '../notion.command';
import { notionError } from '../notion.error';
import { notionEvent } from '../notion.event';
import { notionQuery } from '../notion.query';
import { createNotionQueryHandler } from '../query/create-notion-query-handler';
import { notionCommandEventMap } from './notion-command-event-map';
import { createNotionApiHttpHeaders } from '../api/create-notion-api-http-headers';

/**
 * Creates a Notion client
 *
 * @param clientOptins Notion client options
 * @returns Notion client
 */
export function createNotionClient(clientOptions: NotionClientOptions): NotionClient {
  const { apiToken, apiVersion, endpointUrl = new URL('https://api.notion.com/v1/'), httpClient } = clientOptions;
  const httpHeaders = createNotionApiHttpHeaders(apiVersion, apiToken);
  return createClient({
    command: notionCommand,
    commandEventMap: notionCommandEventMap,
    commandHandler: toEvents => createNotionCommandHandler({ apiToken, apiVersion, httpClient, toEvents }),
    error: notionError,
    event: notionEvent,
    query: notionQuery,
    queryHandler: () => createNotionQueryHandler({ apiToken, apiVersion, endpointUrl, httpClient }),
  });
}
