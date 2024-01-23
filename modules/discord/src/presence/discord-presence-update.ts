import { type DiscordActivity } from '../activity/discord-activity';
import { type DiscordGuildSnowflake } from '../guild/snowflake/discord-guild-snowflake';
import { type DiscordUser } from '../user/discord-user';
import { type DiscordClientStatus } from './discord-client-status';
import { type DiscordPresenceStatus } from './status/discord-presence-status';

/**
 * Discord presence update
 */
export interface DiscordPresenceUpdate {
  /**
   * Activities
   */
  readonly activities: ReadonlyArray<DiscordActivity>;
  /**
   * Client status
   */
  readonly client_status: DiscordClientStatus;
  /**
   * Guild identifier
   */
  readonly guild_id: DiscordGuildSnowflake;
  /**
   * Status
   */
  readonly status: Exclude<DiscordPresenceStatus, 'invisible'>;
  /**
   * User
   */
  readonly user: DiscordUser;
}
