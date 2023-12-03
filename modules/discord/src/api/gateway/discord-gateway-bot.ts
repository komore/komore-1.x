/**
 * Discord gateway bot
 */
export interface DiscordGatewayBot {
  /**
   * Session start limits
   */
  readonly session_start_limit: {
    readonly total: number;
    readonly remaining: number;
    readonly reset_after: number;
    readonly max_concurrency: number;
  };
  /**
   * Recommended number of shaders
   */
  readonly shards: number;
  /**
   * URL
   */
  readonly url: string;
}
