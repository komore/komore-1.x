import { createEventType } from '@komore/event';
import { teamsDomain } from '@komore/teams';

/**
 * Teams event
 */
export const teamsEvent = createEventType(teamsDomain, {});
