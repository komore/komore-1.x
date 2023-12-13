import { type Expand, type ReadonlyRecord } from '@komore/typescript';

import { type CliParameterDefinition } from './cli-parameter-definition';
import { type CliParameterTypeFromCliParameterDefinition } from './cli-parameter-type-from-cli-parameter-definition';

/**
 * Command-line parameters type from command-line parameter defininitions
 */
export type CliParametersTypeFromCliParameterDefinitions<
  ParameterDefinitions extends ReadonlyRecord<string, CliParameterDefinition<unknown, boolean>>,
> = Expand<{
  readonly [K in keyof ParameterDefinitions]: CliParameterTypeFromCliParameterDefinition<ParameterDefinitions[K]>;
}>;
