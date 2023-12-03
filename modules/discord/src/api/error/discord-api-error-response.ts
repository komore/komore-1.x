import { type DiscordApiErrorList } from './discord-api-error-list';

/**
 * Discord API error response
 */
export interface DiscordApiErrorResponse {
  /**
   * Error code
   */
  readonly code: number;
  /**
   * Errors
   */
  readonly errors?:
    | DiscordApiErrorList
    | Readonly<Record<string, DiscordApiErrorList>>
    | Readonly<Record<string, Readonly<Record<string, DiscordApiErrorList>>>>;
  /**
   * Error message
   */
  readonly message: string;
}
