import { type TeamsApiClient } from '../teams-api-client';
import { type TeamsTeamId } from './id/teams-team-id';
import { type TeamsTeam } from './teams-team';

/**
 * Creates a function that returns a Teams team
 *
 * @param apiClient Teams API client
 * @returns Function that returns a Teams team
 */
export function getTeamsTeam(apiClient: TeamsApiClient): (teamId: TeamsTeamId) => Observable<TeamsTeam> {
  return teamId => {
    const resourcePath = `teams/${teamId}` as const;
    return apiClient<TeamsTeam>('GET', resourcePath);
  };
}
