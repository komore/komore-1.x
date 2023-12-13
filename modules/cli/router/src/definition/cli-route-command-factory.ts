import { type GenericCommand } from '@komore/command';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliParameterDefinition } from './parameter/cli-parameter-definition';
import { type CliParametersTypeFromCliParameterDefinitions } from './parameter/cli-parameters-type-from-cli-parameter-definitions';

/**
 * Command-line route command factory
 *
 * @template Definitions Parameter definitions
 * @template CommandType Command type
 */
export type CliRouteCommandFactory<
  Definitions extends ReadonlyRecord<string, CliParameterDefinition<unknown, boolean>>,
  CommandType extends GenericCommand,
> = (
  parameters: CliParametersTypeFromCliParameterDefinitions<Definitions>,
  commandLine: ReadonlyArray<string>
) => CommandType;
