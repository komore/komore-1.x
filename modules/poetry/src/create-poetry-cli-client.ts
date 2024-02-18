import { type PoetryCliClient } from './poetry-cli-client';
import { type PoetryCliClientOptions } from './poetry-cli-client-options';

/**
 * Creates a Poetry CLI client
 *
 * @param clientOptions Poetry CLI client options
 * @returns Poetry CLI client
 */
export function createPoetryCliClient(clientOptions: PoetryCliClientOptions): PoetryCliClient {
  const { commandName = 'poetry', workingDirectory } = clientOptions;
  const baseFlags = ['--no-ansi'];
  return commandParameters => {};
}
