import { matchCommand } from '@komore/command';

import { type NotionCommandHandler } from './notion-command-handler';
import { type NotionCommandHandlerOptions } from './notion-command-handler-options';
import { map, redactValue, tapNext } from '@komore/reactive';
import { toEventCausedByCommand } from '@komore/client';

/**
 * Creates a Notion command handler
 *
 * @param handlerOptions Notion command handler options
 * @returns Notion command handler
 */
export function createNotionCommandHandler(handlerOptions: NotionCommandHandlerOptions): NotionCommandHandler {
  const { apiToken, apiVersion, endpointUrl, httpClient, toEvents } = handlerOptions;
  const headers = createNotionApiHttpHeaders(apiVersion, apiToken);
  return command =>
    matchCommand(command, {
      createPage: () => {
        const url = new URL('pages', endpointUrl);
        return httpClient({ method: 'POST', url, options: {
          headers,

        } });
      },
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue());
}
