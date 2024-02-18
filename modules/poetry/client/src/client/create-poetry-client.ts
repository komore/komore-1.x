import { createClient } from '@komore/client';

import { poetryCommand } from '../poetry.command';
import { poetryError } from '../poetry.error';
import { poetryEvent } from '../poetry.event';
import { poetryQuery } from '../poetry.query';
import { type PoetryClient } from './poetry-client';
import { type PoetryClientOptions } from './poetry-client-options';

/**
 * Creates a Poetry client
 *
 * @param clientOptions Poetry client options
 * @returns Poetry client
 */
export function createPoetryClient(clientOptions: PoetryClientOptions): PoetryClient {
  const { cliClient } = clientOptions;
  return createClient({
    command: poetryCommand,
    commandEventMap: poetryClientCommandEventMap,
    commandHandler: toEvents => createPoetryCommandHandler({ cliClient, toEvents }),
    error: poetryError,
    event: poetryEvent,
    query: poetryQuery,
    queryHandler: () => createPoetryQueryHandler({ cliClient }),
  });
}
