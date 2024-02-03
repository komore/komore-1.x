import { matchCommand } from '@komore/command';

import { type NotionCommandHandler } from './notion-command-handler';
import { type NotionCommandHandlerOptions } from './notion-command-handler-options';
import { map, redactValue, tapNext } from '@komore/reactive';
import { toEventCausedByCommand } from '@komore/client';
import { createNotionPage } from '@komore/notion';
import { notionEvent } from '../notion.event';

/**
 * Creates a Notion command handler
 *
 * @param handlerOptions Notion command handler options
 * @returns Notion command handler
 */
export function createNotionCommandHandler(handlerOptions: NotionCommandHandlerOptions): NotionCommandHandler {
  const { apiClient, toEvents } = handlerOptions;
  const createPage = createNotionPage(apiClient);
  return command =>
    matchCommand(command, {
      createPage: ({ page }) => createPage(page).pipe(map(createdPage => notionEvent.pageCreated({ createdPage }))),
    }).pipe(map(toEventCausedByCommand(command)), tapNext(toEvents), redactValue());
}
