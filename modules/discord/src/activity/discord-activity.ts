import { type DiscordActivityDataByType } from './discord-activity-data-by-type';

/**
 * Discord activity
 *
 * @note Bot users are only able to set the `name`, `state`, `type` and `url` properties
 */
export interface DiscordActivity<
  ActivityType extends keyof DiscordActivityDataByType = keyof DiscordActivityDataByType,
> {
  /**
   * Activity name
   */
  readonly name: string;
  /**
   * Activity type
   */
  readonly type: ActivityType;
  // TODO: other properties
}
