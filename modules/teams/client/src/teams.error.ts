import { createErrorType } from '@komore/error';
import { teamsDomain } from '@komore/teams';

/**
 * Teams error
 */
export const teamsError = createErrorType(teamsDomain, {});
