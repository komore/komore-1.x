import { type EToroLightStreamerSessionId } from './etoro-light-streamer-session-id';

/**
 * eToro light streamer session parameters
 */
export interface EToroLightStreamerSessionParameters {
  /**
   * IP address
   */
  readonly ipAddress: string;
  /**
   * Keep alive, in milliseconds
   */
  readonly keepAlive: number;
  /**
   * Maximum number of requests
   */
  readonly requestLimit: number;
  /**
   * Server name
   */
  readonly serverName: string;
  /**
   * Session identifier
   */
  readonly sessionId: EToroLightStreamerSessionId;
}
