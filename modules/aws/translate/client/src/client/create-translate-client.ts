import { createClient } from '@komore/client';

import { translateCommand } from '../translate.command';
import { translateError } from '../translate.error';
import { translateEvent } from '../translate.event';
import { translateQuery } from '../translate.query';
import { type TranslateClient } from './translate-client';
import { translateClientCommandEventMap } from './translate-client-command-event-map';
import { type TranslateClientOptions } from './translate-client-options';

/**
 * Creates a Translate client
 *
 * @param options Translate client options
 * @returns Translate client
 */
export function createTranslateClient(options: TranslateClientOptions): TranslateClient {
  const { apiClient } = options;
  return createClient({
    command: translateCommand,
    commandEventMap: translateClientCommandEventMap,
    commandHandler: toEvents => createTranslateCommandHandler({ apiClient, toEvents }),
    error: translateError,
    event: translateEvent,
    query: translateQuery,
    queryHandler: () => createTranslateQueryHandler({ apiClient }),
  });
}
