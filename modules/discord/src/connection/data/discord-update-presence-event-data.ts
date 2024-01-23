import { type DiscordActivity } from '../../activity/discord-activity';
import { type DiscordPresenceStatus } from '../../presence/status/discord-presence-status';

/**
 * Discord update presence event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence Update Presence}
 */
export interface DiscordUpdatePresenceEventData {
  /**
   * Activities
   */
  readonly activities: ReadonlyArray<DiscordActivity>;
  /**
   * Whether the client is away from keyboard
   */
  readonly afk: boolean;
  /**
   * Epoch timestamp in milliseconds for when the client went idle
   *
   * @note If the client is not idle, `null` should be used
   */
  readonly since: number | null;
  /**
   * New status
   */
  readonly status: DiscordPresenceStatus;
}

/**
 * Discord update presence opcode
 */
export const discordUpdatePresenceOpcode = 3;
