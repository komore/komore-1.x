import { type ReadonlyRecord } from '@komore/typescript';
import { type CliArgumentDefinition } from './argument/cli-argument-definition';
import { type CliFlagDefinition } from './flag/cli-flag-definition';
import { type CliParameterTypeName } from './parameter/cli-parameter-type-name';

/**
 * Command-line interface command options
 * @template ArgumentDefinitions Argument definitions
 * @template FlagDefinitions Flag definitions
 */
export interface CliCommandOptions<
  ArgumentDefinitions extends ReadonlyArray<CliArgumentDefinition<string, CliParameterTypeName, boolean>>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>
> {
  readonly aliases?: ReadonlyArray<string>;
  readonly args?: ArgumentDefinitions;
  readonly description?: string;
  readonly flags?: FlagDefinitions;
  readonly usage?: string;
}
