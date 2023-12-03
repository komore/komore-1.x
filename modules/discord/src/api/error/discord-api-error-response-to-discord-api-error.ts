import { DiscordApiError } from '../../error/discord-api-error';
import { type DiscordApiErrorResponse } from './discord-api-error-response';

/**
 * Returns a Discord API error, given a Discord API error response
 *
 * @param errorResponse Discord API error response
 * @returns Discord API error
 */
export function discordApiErrorResponsetoDiscordApiError(errorResponse: DiscordApiErrorResponse): DiscordApiError {
  const { code, message } = errorResponse;
  // TODO: error descriptions
  console.log('error descriptions', errorResponse.errors);
  return new DiscordApiError(message, code, new Map());
}
