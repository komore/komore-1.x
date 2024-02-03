import { type CommandEventPairFromType } from '@komore/client';
import { type NotionApiClient } from '@komore/notion';

import { type notionCommand } from '../notion.command';
import { type notionEvent } from '../notion.event';

/**
 * Notion command handler options
 */
export interface NotionCommandHandlerOptions {
  /**
   * Notion API client
   */
  readonly apiClient: NotionApiClient;
  /**
   * Notion events recorder
   */
  readonly toEvents: (pair: CommandEventPairFromType<typeof notionCommand, typeof notionEvent>) => void;
}
