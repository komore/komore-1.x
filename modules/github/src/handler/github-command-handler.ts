import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type gitHubCommand } from '../github.command';

/**
 * GitHub command handler
 */
export type GitHubCommandHandler = CommandHandler<CommandFromType<(typeof gitHubCommand)[keyof typeof gitHubCommand]>>;
