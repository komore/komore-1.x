import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type browserRouterCommand } from '../browser-router.command';

/**
 * Browser router command handler
 */
export type BrowserRouterCommandHandler = CommandHandler<CommandFromType<typeof browserRouterCommand>>;
