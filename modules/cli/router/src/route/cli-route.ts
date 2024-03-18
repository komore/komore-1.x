import { type Command } from '@komore/command';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouteCommandFactory } from '../definition/cli-route-command-factory';
import { type CliRouteDefinition } from '../definition/cli-route-definition';
import { type CliFlagParameterDefinition } from '../definition/parameter/cli-flag-parameter-definition';
import { type CliPathParameterDefinitionsFromCliRoutePath } from '../definition/parameter/cli-path-parameter-definitions-from-cli-route-path';
import { type GenericCliRouteDefinition } from '../definition/generic-cli-route-definition';
import { type CliRouteMatcher } from '../route/cli-route-matcher';
import { commandLineToCliRouteParameters } from './command-line-to-cli-route-parameters';

/**
 * Creates a route matcher for a command-line route with path parameters
 *
 * @param path Path
 * @param description Description
 * @param definition Definition
 * @param commandFactory Command factory
 * @returns Command-line route matcher
 */
export function cliRoute<
  Path extends `${string}:${string}`,
  CommandType extends Command,
  PathDefinitions extends CliPathParameterDefinitionsFromCliRoutePath<Path>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>> = ReadonlyRecord<
    string,
    never
  >,
  ChildDefinitions extends ReadonlyArray<GenericCliRouteDefinition> = ReadonlyArray<GenericCliRouteDefinition>,
>(
  path: Path,
  description: string,
  definition: Omit<CliRouteDefinition<Path, PathDefinitions, FlagDefinitions, ChildDefinitions>, 'pathPattern'>,
  commandFactory: CliRouteCommandFactory<PathDefinitions & FlagDefinitions, CommandType>
): CliRouteMatcher<PathDefinitions, FlagDefinitions, CommandType>;

/**
 * Creates a route matcher for a command-line route
 *
 * @param path Path
 * @param description Description
 * @param definition Definition
 * @param commandFactory Command factory
 * @returns Command-line route matcher
 */
export function cliRoute<
  Path extends string,
  CommandType extends Command,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>> = ReadonlyRecord<
    string,
    never
  >,
  ChildDefinitions extends ReadonlyArray<GenericCliRouteDefinition> = ReadonlyArray<GenericCliRouteDefinition>,
>(
  path: Path,
  description: string,
  definition: Omit<
    CliRouteDefinition<Path, CliPathParameterDefinitionsFromCliRoutePath<Path>, FlagDefinitions, ChildDefinitions>,
    'path' | 'pathPattern'
  >,
  commandFactory: CliRouteCommandFactory<FlagDefinitions, CommandType>
): CliRouteMatcher<{}, FlagDefinitions, CommandType>;

/**
 * Creates a route matcher for a command-line route
 *
 * @param path Path
 * @param description Description
 * @param commandFactory Command factory
 * @returns Command-line route matcher
 */
export function cliRoute<Path extends string, CommandType extends Command>(
  path: Path,
  description: string,
  commandFactory: CliRouteCommandFactory<{}, CommandType>
): CliRouteMatcher<{}, {}, CommandType>;

export function cliRoute<
  Path extends string,
  CommandType extends Command,
  PathDefinitions extends CliPathParameterDefinitionsFromCliRoutePath<Path>,
  FlagDefinitions extends ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
  ChildDefinitions extends ReadonlyArray<GenericCliRouteDefinition> = ReadonlyArray<GenericCliRouteDefinition>,
>(
  path: Path,
  _description: string,
  definitionOrCommand:
    | Omit<CliRouteDefinition<Path, PathDefinitions, FlagDefinitions, ChildDefinitions>, 'pathPattern'>
    | Omit<CliRouteDefinition<Path, PathDefinitions, FlagDefinitions, ChildDefinitions>, 'path' | 'pathPattern'>
    | CliRouteCommandFactory<PathDefinitions & FlagDefinitions, CommandType>,
  command?: CliRouteCommandFactory<PathDefinitions & FlagDefinitions, CommandType>
): CliRouteMatcher<PathDefinitions, FlagDefinitions, CommandType> {
  const [definition, parametersToCommand] =
    command !== undefined
      ? [
          definitionOrCommand as
            | Omit<CliRouteDefinition<Path, PathDefinitions, FlagDefinitions, ChildDefinitions>, 'pathPattern'>
            | Omit<
                CliRouteDefinition<Path, PathDefinitions, FlagDefinitions, ChildDefinitions>,
                'path' | 'pathPattern'
              >,
          command,
        ]
      : [{}, definitionOrCommand as CliRouteCommandFactory<PathDefinitions & FlagDefinitions, CommandType>];
  const pathDefinitions = 'path' in definition ? definition.path : ({} as PathDefinitions);
  const flagDefinitions = definition.flag ?? ({} as FlagDefinitions);
  const commandLineToParameters = commandLineToCliRouteParameters(path, pathDefinitions, flagDefinitions);

  return {
    commandLineToParameters,
    parametersToCommand,
  };
}
