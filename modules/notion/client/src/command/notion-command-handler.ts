import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type notionCommand } from '../notion.command';

/**
 * Notion command handler
 */
export type NotionCommandHandler = CommandHandler<CommandFromType<typeof notionCommand>>;
