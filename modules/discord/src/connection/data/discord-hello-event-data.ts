/**
 * Discord hello event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#hello Hello}
 */
export interface DiscordHelloEventData {
  /**
   * Interval (in milliseconds) an app should heartbeat with
   */
  readonly heartbeat_interval: number;
}

/**
 * Discord hello opcode
 */
export const discordHelloOpcode = 10;
