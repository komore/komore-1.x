import { createClient } from '@komore/client';

import { createNotionCommandHandler } from './command/create-notion-command-handler';
import { notionCommand } from './notion.command';
import { notionError } from './notion.error';
import { notionEvent } from './notion.event';
import { notionQuery } from './notion.query';
import { type NotionClient } from './notion-client';
import { type NotionClientOptions } from './notion-client-options';
import { notionClientCommandEventMap } from './notion-client-command-event-map';
import { createNotionQueryHandler } from './query/create-notion-query-handler';

/**
 * Creates a Notion client
 *
 * @param clientOptins Notion client options
 * @returns Notion client
 */
export function createNotionClient(clientOptions: NotionClientOptions): NotionClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: notionCommand,
    commandEventMap: notionClientCommandEventMap,
    commandHandler: toEvents => createNotionCommandHandler({ apiClient, toEvents }),
    error: notionError,
    event: notionEvent,
    query: notionQuery,
    queryHandler: () => createNotionQueryHandler({ apiClient }),
  });
}
