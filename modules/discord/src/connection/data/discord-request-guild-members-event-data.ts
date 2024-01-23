import { type DiscordGuildSnowflake } from '../../guild/snowflake/discord-guild-snowflake';
import { type DiscordUserSnowflake } from '../../user/snowflake/discord-user-snowflake';

/**
 * Discord request guild members event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#request-guild-members Request Guild Members}
 */
export type DiscordRequestGuildMembersEventData = {
  /**
   * Guild identifier
   */
  readonly guild_id: DiscordGuildSnowflake;
  /**
   * Maximum number of members to send as a result to the query
   *
   * @note A value of 0 removes any limit
   */
  readonly limit: number;
  /**
   * TODO
   */
  readonly nonce?: string;
  /**
   * Whether to include the presence of users in the query result
   */
  readonly presences?: boolean;
} & (
  | {
      /**
       * String that usernames should start with
       *
       * @note An empty string queries all usernames
       */
      readonly query: string;
    }
  | {
      /**
       * User identifiers
       */
      readonly user_ids: ReadonlyArray<DiscordUserSnowflake>;
    }
);

/**
 * Discord request guild members opcode
 */
export const discordRequestGuildMembersOpcode = 8;
