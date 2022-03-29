import { objectToEntries } from '@komore/functional';
import { of, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';
import { type CliArgument } from './argument/cli-argument';
import { type CliFlag } from './flag/cli-flag';
import { type CliParameterTypeName } from './parameter/cli-parameter-type-name';
import { type CliCommand } from './cli-command';
import { type CliCommandOptions } from './cli-command-options';

/**
 * Creates a command-line interface command
 * @param commandName Command name
 * @param commandHandler Command handler
 * @param options Options
 * @returns Command
 */
export function createCliCommand<
  CommandName extends string,
  Arguments extends ReadonlyArray<CliArgument<string, CliParameterTypeName>>,
  Flags extends ReadonlyRecord<string, CliFlag<CliParameterTypeName>>
>(
  commandName: CommandName,
  commandHandler: ($: Observable<[args: Arguments, flags: Flags]>) => Observable<number | never>,
  options: CliCommandOptions<Arguments, Flags>
): CliCommand<CommandName> {
  const wrapper = {
    [commandName]: function (argv: ReadonlyArray<string>): Observable<number> {
      const $ = of(42 as unknown as [args: Arguments, flags: Flags]);
      console.log('weeeeeeeeeeeeeeeee', argv);
      return commandHandler($);
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
 * @template CommandName Command name
 */
type CliCommandProperties<CommandName extends string> = Pick<CliCommand<CommandName>, keyof CliCommand<CommandName>>;
