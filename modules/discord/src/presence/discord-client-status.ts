import { DiscordPresenceStatus } from './status/discord-presence-status';

/**
 * Discord client status
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#client-status-object Client Status}
 */
export interface DiscordClientStatus {
  /**
   * Active desktop application session status
   */
  readonly desktop?: Exclude<DiscordPresenceStatus, 'invisible' | 'offline'>;
  /**
   * Active mobile application session status
   */
  readonly mobile?: Exclude<DiscordPresenceStatus, 'invisible' | 'offline'>;
  /**
   * Active web application session status
   */
  readonly web?: Exclude<DiscordPresenceStatus, 'invisible' | 'offline'>;
}
