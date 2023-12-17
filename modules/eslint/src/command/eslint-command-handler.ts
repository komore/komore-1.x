import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type esLintCommand } from '../eslint.command';

/**
 * ESLint command handler
 */
export type EsLintCommandHandler = CommandHandler<CommandFromType<typeof esLintCommand>>;
