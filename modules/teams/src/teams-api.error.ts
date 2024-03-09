import { createErrorType } from '@komore/error';

import { teamsDomain } from './teams.domain';

/**
 * Teams API error
 */
export const teamsApiError = createErrorType(teamsDomain, {});
