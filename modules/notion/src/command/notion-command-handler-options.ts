import { type CommandEventPair } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { type HttpClient } from '@komore/http/client';

import { type NotionApiVersion } from '../api/notion-api-version';
import { type notionCommand } from '../notion.command';
import { type notionEvent } from '../notion.event';

/**
 * Notion command handler options
 */
export interface NotionCommandHandlerOptions {
  /**
   * API token
   */
  readonly apiToken: string;
  /**
   * API version
   */
  readonly apiVersion: NotionApiVersion;
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Notion events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<CommandFromType<typeof notionCommand>, EventFromType<typeof notionEvent>>
  ) => void;
}
