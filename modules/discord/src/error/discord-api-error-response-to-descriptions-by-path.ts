import { isArray } from '@komore/collection';
import { type ReadonlyRecord } from '@komore/typescript';

import { type DiscordApiErrorDescription } from './discord-api-error-description';
import { type DiscordApiErrorResponse } from './discord-api-error-response';
import { DiscordApiErrorList } from './discord-api-error-list';

/**
 * Returns Discord API error descriptions by path, given a Discord API error response
 *
 * @param errorResponse Discord API error response
 */
export function discordApiErrorResponseToDescriptionsByPath(
  errorResponse: DiscordApiErrorResponse
): ReadonlyRecord<string, ReadonlyArray<DiscordApiErrorDescription>> {
  const { errors } = errorResponse;
  if (errors === undefined) {
    return {};
  }

  if (isDiscordApiErrorList(errors)) {
    return {
      '': errors._errors,
    };
  }

  console.log('TODO: discord api error descriptions', errors);

  return {};
}

function isDiscordApiErrorList(errors: NonNullable<DiscordApiErrorResponse['errors']>): errors is DiscordApiErrorList {
  return '_errors' in errors;
}
