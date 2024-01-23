import { type DateTimeString } from '@komore/temporal';

import { type DiscordRoleSnowflake } from '../role/snowflake/discord-role-snowflake';
import { type DiscordUser } from '../user/discord-user';

/**
 * Discord guild member
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object Guild Member}
 */
export interface DiscordGuildMember {
  /**
   * Avatar hash
   */
  readonly avatar?: string | null;
  /**
   * Date and time the user joined the guild
   */
  readonly joined_at: DateTimeString;
  /**
   * Guild nickname
   */
  readonly nick?: string | null;
  /**
   * List of role identifiers
   */
  readonly roles: ReadonlyArray<DiscordRoleSnowflake>;
  /**
   * User
   */
  readonly user: DiscordUser;
  // TODO: premium_since, deaf, mute, flags, etc..
}
