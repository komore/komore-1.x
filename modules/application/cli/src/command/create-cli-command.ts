import { objectToEntries } from '@komore/functional';
import { type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliArgumentDefinition } from './argument/cli-argument-definition';
import { buildCliCommandContext } from './build-cli-command-context';
import { type CliCommand } from './cli-command';
import { type CliCommandOptions } from './cli-command-options';
import { type CliCommandContext } from './cli-command-context';
import { type CliFlagDefinition } from './flag/cli-flag-definition';
import { type CliParameterTypeName } from './parameter/cli-parameter-type-name';

/**
 * Creates a command-line interface command
 *
 * @param commandName Command name
 * @param commandHandler Command handler
 * @param options Options
 * @returns Command
 * @template CommandName Command name
 * @template ArgumentDefinitions Argument definitions
 * @template FlagDefinitions Flag definitions
 */
export function createCliCommand<
  CommandName extends string,
  ArgumentDefinitions extends ReadonlyArray<CliArgumentDefinition<string, CliParameterTypeName, boolean>>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>
>(
  commandName: CommandName,
  commandHandler: (
    $: Observable<CliCommandContext<CommandName, ArgumentDefinitions, FlagDefinitions>>
  ) => Observable<number | never>,
  options: CliCommandOptions<ArgumentDefinitions, FlagDefinitions>
): CliCommand<CommandName> {
  const wrapper = {
    [commandName]: function (argv: ReadonlyArray<string>): Observable<number> {
      const context = buildCliCommandContext(commandName, argv, options);
      return commandHandler(context);
    },
  };

  const commandProperties: CliCommandProperties<CommandName> = {
    aliases: options.aliases ?? [],
    commandName,
    description: options.description ?? 'No description available',
    usage: options.usage ?? 'TODO: usage',
  };

  const cliCommand = wrapper[commandName] as CliCommand<CommandName>;

  for (const [propertyName, propertyValue] of objectToEntries(commandProperties)) {
    Object.defineProperty(cliCommand, propertyName, {
      enumerable: true,
      value: propertyValue,
      writable: false,
    });
  }

  return cliCommand;
}

/**
 * CLI command properties, omitting the function signature
 *
 * @template CommandName Command name
 */
type CliCommandProperties<CommandName extends string> = Pick<CliCommand<CommandName>, keyof CliCommand<CommandName>>;
