import { type ReadonlyRecord } from '@komore/typescript';

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
    | ReadonlyRecord<string, DiscordApiErrorList>
    | ReadonlyRecord<string, ReadonlyRecord<string, DiscordApiErrorList>>;
  /**
   * Error message
   */
  readonly message: string;
}
