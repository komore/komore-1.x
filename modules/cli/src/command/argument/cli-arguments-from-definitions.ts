import { type Expand } from '@komore/typescript';
import { type CliParameterTypeName } from '../parameter/cli-parameter-type-name';
import { type CliParameterTypeNameMapping } from '../parameter/cli-parameter-type-name-mapping';
import { type CliArgumentDefinition } from './cli-argument-definition';

/**
 * CLI arguments from definitions
 *
 * @template ArgumentDefinitions Argument definitions
 */
export type CliArgumentsFromDefinitions<
  ArgumentDefinitions extends ReadonlyArray<CliArgumentDefinition<string, CliParameterTypeName, boolean>>
> = Expand<{
  [K in keyof ArgumentDefinitions]: ArgumentDefinitions[K] extends CliArgumentDefinition<
    string,
    CliParameterTypeName,
    boolean
  >
    ? ArgumentDefinitions[K]['required'] extends true
      ? CliParameterTypeNameMapping<ArgumentDefinitions[K]['type']>
      : CliParameterTypeNameMapping<ArgumentDefinitions[K]['type']> | undefined
    : never;
}>;
