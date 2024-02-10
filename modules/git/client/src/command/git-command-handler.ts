import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type gitCommand } from '../git.command';

/**
 * Git command handler
 */
export type GitCommandHandler = CommandHandler<CommandFromType<typeof gitCommand>>;
