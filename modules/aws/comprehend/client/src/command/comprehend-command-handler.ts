import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type comprehendCommand } from '../comprehend.command';

/**
 * Comprehend command handler
 */
export type ComprehendCommandHandler = CommandHandler<CommandFromType<typeof comprehendCommand>>;
