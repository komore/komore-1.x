import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type snsCommand } from '../sns.command';

/**
 * SNS command handler
 */
export type SnsCommandHandler = CommandHandler<CommandFromType<typeof snsCommand>>;
