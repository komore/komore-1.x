/**
 * Discord resume event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#resume Resume}
 */
export interface DiscordResumeEventData {
  /**
   * Last sequence number received
   */
  readonly seq: number;
  /**
   * Session identifier
   */
  readonly session_id: string;
  /**
   * Session token
   */
  readonly token: string;
}

/**
 * Discord resume opcode
 */
export const discordResumeOpcode = 6;
