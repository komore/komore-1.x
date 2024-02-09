import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type teamsCommand } from '../teams.command';

/**
 * Teams command handler
 */
export type TeamsCommandHandler = CommandHandler<CommandFromType<typeof teamsCommand>>;
