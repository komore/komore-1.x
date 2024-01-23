import { createErrorType, errorProperties } from '@komore/error';
import { type ReadonlyRecord } from '@komore/typescript';

import { discordDomain } from './discord.domain';
import { type DiscordApiErrorDescription } from './error/discord-api-error-description';

/**
 * Discord API error
 */
export const discordApiError = createErrorType(discordDomain, {
  /**
   * Unknown API error
   */
  unknown: errorProperties<{
    /**
     * Error code
     */
    readonly code: number;
    /**
     * Error descriptions
     */
    readonly descriptions: ReadonlyRecord<string, ReadonlyArray<DiscordApiErrorDescription>>;
    /**
     * Error message
     */
    readonly message: string;
  }>(),
});
