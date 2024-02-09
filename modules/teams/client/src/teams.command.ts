import { createCommandType } from '@komore/command';
import { teamsDomain } from '@komore/teams';

/**
 * Teams command
 */
export const teamsCommand = createCommandType(teamsDomain, {});
