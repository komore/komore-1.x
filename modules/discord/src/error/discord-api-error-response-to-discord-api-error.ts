import { type ErrorFromType } from '@komore/error';

import { discordApiError } from '../discord-api.error';
import { type DiscordApiErrorResponse } from './discord-api-error-response';
import { discordApiErrorResponseToDescriptionsByPath } from './discord-api-error-response-to-descriptions-by-path';

/**
 * Returns a Discord API error, given a Discord API error response
 *
 * @param errorResponse Discord API error response
 * @returns Discord API error
 */
export function discordApiErrorResponsetoDiscordApiError(
  errorResponse: DiscordApiErrorResponse
): ErrorFromType<typeof discordApiError> {
  const { code, message } = errorResponse;
  const descriptions = discordApiErrorResponseToDescriptionsByPath(errorResponse);
  return discordApiError.unknown({ code, descriptions, message });
}
