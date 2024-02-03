import { type DateTimeString } from '@komore/temporal';

import { type TeamsTeamId } from './id/teams-team-id';
import { type TeamsTeamClassSettings } from './teams-team-class-settings';
import { type TeamsTeamFunSettings } from './teams-team-fun-settings';
import { type TeamsTeamGuestSettings } from './teams-team-guest-settings';

/**
 * Teams team
 */
export interface TeamsTeam {
  /**
   * Classification label
   */
  readonly classification: string;
  /**
   * Class settings
   */
  readonly classSettings?: TeamsTeamClassSettings;
  /**
   * Date and time when the team was created
   */
  readonly createdDateTime: DateTimeString;
  /**
   * Team description
   */
  readonly description: string;
  /**
   * Team name
   */
  readonly displayName: string;
  /**
   * Fun settings
   */
  readonly funSettings: TeamsTeamFunSettings;
  /**
   * Guest settings
   */
  readonly guestSettings: TeamsTeamGuestSettings;
  /**
   * Team identifier
   */
  readonly id: TeamsTeamId;
  /**
   * Internal identifier
   *
   * @private
   */
  readonly internalId: string;
}
