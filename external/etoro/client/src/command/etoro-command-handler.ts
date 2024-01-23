import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type eToroCommand } from '../etoro.command';

/**
 * eToro command handler
 */
export type EToroCommandHandler = CommandHandler<CommandFromType<typeof eToroCommand>>;
