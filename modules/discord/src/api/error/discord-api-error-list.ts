import { type DiscordApiErrorDescription } from './discord-api-error-description';

/**
 * Discord API error list
 */
export interface DiscordApiErrorList {
  /**
   * List of error descriptions
   */
  readonly _errors: ReadonlyArray<DiscordApiErrorDescription>;
}
