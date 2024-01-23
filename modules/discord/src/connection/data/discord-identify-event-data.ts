import { type DiscordIdentifyConnectionProperties } from './discord-identify-connection-properties';
import { type DiscordUpdatePresenceEventData } from './discord-update-presence-event-data';

/**
 * Discord identify event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify Identify}
 */
export interface DiscordIdentifyEventData {
  /**
   * Whether to enable compression
   *
   * @note Defaults to `false`
   */
  readonly compress?: boolean;
  /**
   * Intents
   */
  readonly intents: number;
  /**
   * Connection properties
   */
  readonly properties: DiscordIdentifyConnectionProperties;
  /**
   * Token
   */
  readonly token: string;
  /**
   * TODO
   */
  readonly large_threshold?: number;
  /**
   * TODO
   */
  readonly shard?: ReadonlyArray<number>;
  /**
   * Presence information
   */
  readonly presence?: DiscordUpdatePresenceEventData;
}

/**
 * Discord identify opcode
 */
export const discordIdentifyOpcode = 2;
