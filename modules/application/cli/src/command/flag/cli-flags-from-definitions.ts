import { type Expand, type ReadonlyRecord } from '@komore/typescript';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliParameterTypeNameMapping } from '../parameter/cli-parameter-type-name-mapping';
import { type CliFlagDefinition } from './cli-flag-definition';

/**
 * CLI flags from definitions
 *
 * @template FlagDefinitions Flag definitions
 */
export type CliFlagsFromDefinitions<
  FlagDefinitions extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>
> = Expand<
  {
    [K in keyof CliFlagsWithRequirement<FlagDefinitions, true>]: CliParameterTypeNameMapping<
      FlagDefinitions[K]['type']
    >;
  } & {
    [K in keyof CliFlagsWithRequirement<FlagDefinitions, false>]?: CliParameterTypeNameMapping<
      FlagDefinitions[K]['type']
    >;
  }
>;

type CliFlagsWithRequirement<
  FlagDefinitions extends ReadonlyRecord<string, CliFlagDefinition<CliParameterTypeName, boolean>>,
  Required extends boolean
> = {
  readonly [K in keyof FlagDefinitions]: FlagDefinitions[K]['required'] extends Required ? FlagDefinitions[K] : never;
};
