import { type ReadonlyRecord } from '@komore/typescript';
import { type CliArgument } from './argument/cli-argument';
import { type CliFlag } from './flag/cli-flag';
import { type CliParameterTypeName } from './parameter/cli-parameter-type-name';

/**
 * Command-line interface command options
 * @template Arguments Argument types
 * @template Flags Flag types
 */
export interface CliCommandOptions<
  Arguments extends ReadonlyArray<CliArgument<string, CliParameterTypeName>>,
  Flags extends ReadonlyRecord<string, CliFlag<CliParameterTypeName>>
> {
  readonly aliases?: ReadonlyArray<string>;
  readonly args?: Arguments;
  readonly description?: string;
  readonly flags?: Flags;
  readonly usage?: string;
}
