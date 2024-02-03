import { commandProperties, createCommandType } from '@komore/command';
import { notionDomain } from '@komore/notion';

import { type CreateNotionPageCommandParameters } from './command/create-notion-page-comment-parameters';

/**
 * Notion command
 */
export const notionCommand = createCommandType(notionDomain, {
  /**
   * Creates a page
   *
   * @see {@link https://developers.notion.com/reference/post-page Create a page}
   */
  createPage: commandProperties<CreateNotionPageCommandParameters>(),
});
