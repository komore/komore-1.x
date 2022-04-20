import { type CliCommand } from './cli-command';

/**
 * Returns a function that returns true when a command matches a name
 *
 * @param name Name
 * @returns Function that returns true when a command matches the name
 */
export function cliCommandByName(name: string): (cliCommand: CliCommand<string>) => boolean {
  return ({ commandName, aliases }) => commandName === name || aliases.includes(name);
}
