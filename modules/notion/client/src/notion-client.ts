import { type Client } from '@komore/client';

import { type notionCommand } from './notion.command';
import { type notionError } from './notion.error';
import { type notionEvent } from './notion.event';
import { type notionQuery } from './notion.query';
import { type notionClientCommandEventMap } from './notion-client-command-event-map';

/**
 * Notion client
 */
export type NotionClient = Client<
  typeof notionCommand,
  typeof notionEvent,
  typeof notionQuery,
  typeof notionError,
  typeof notionClientCommandEventMap
>;
