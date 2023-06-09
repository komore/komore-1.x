import { type ReadonlyRecord } from '@komore/typescript';
import { type CliArgumentDefinition } from './argument/cli-argument-definition';
import { type CliArgumentsFromDefinitions } from './argument/cli-arguments-from-definitions';
import { type CliFlagDefinition } from './flag/cli-flag-definition';
import { type CliFlagsFromDefinitions } from './flag/cli-flags-from-definitions';
import { type CliParameterTypeName } from './parameter/cli-parameter-type-name';

/**
 * CLI command context
 *
 * @template CommandName Command name
 * @template ArgumentDefinitions Argument definitions
 * @template FlagDefinitions Flag definitions
 */
export interface CliCommandContext<
  CommandName extends string,
  ArgumentDefinitions extends ReadonlyArray<CliArgumentDefinition<string, CliParameterTypeName, boolean>>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>
> {
  readonly args: CliArgumentsFromDefinitions<ArgumentDefinitions>;
  readonly flags: CliFlagsFromDefinitions<FlagDefinitions>;
  readonly name: CommandName;
}
