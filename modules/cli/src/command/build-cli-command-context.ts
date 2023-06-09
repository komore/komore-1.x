import { of, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';
import { type CliArgumentDefinition } from './argument/cli-argument-definition';
import { parseCliArguments } from './argument/parse-cli-arguments';
import { type CliCommandContext } from './cli-command-context';
import { type CliCommandOptions } from './cli-command-options';
import { type CliFlagDefinition } from './flag/cli-flag-definition';
import { parseCliFlags } from './flag/parse-cli-flags';
import { type CliParameterTypeName } from './parameter/cli-parameter-type-name';

/**
 * Builds a CLI command context
 *
 * @param commandName Command name
 * @param argv Unprocessed command-line arguments
 * @returns CLi command context
 * @template CommandName Command name
 * @template ArgumentDefinitions Arguments
 * @template FlagDefinitions Flags
 */
export function buildCliCommandContext<
  CommandName extends string,
  ArgumentDefinitions extends ReadonlyArray<CliArgumentDefinition<string, CliParameterTypeName, boolean>>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>
>(
  commandName: CommandName,
  argv: ReadonlyArray<string>,
  options: CliCommandOptions<ArgumentDefinitions, FlagDefinitions>
): Observable<CliCommandContext<CommandName, ArgumentDefinitions, FlagDefinitions>> {
  const firstFlagIndex = argv.findIndex(arg => arg.startsWith('--'));
  const hasFlags = firstFlagIndex !== -1;
  const rawArgs = hasFlags ? argv.slice(0, firstFlagIndex) : argv;
  const rawFlags = hasFlags ? argv.slice(firstFlagIndex) : [];
  const args = parseCliArguments(rawArgs, options.args);
  const flags = parseCliFlags(rawFlags, options.flags);
  const context: CliCommandContext<CommandName, ArgumentDefinitions, FlagDefinitions> = {
    args,
    flags,
    name: commandName,
  };

  return of(context);
}
