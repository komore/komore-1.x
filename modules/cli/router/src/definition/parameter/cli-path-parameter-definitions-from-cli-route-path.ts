import { type Expand, type ReadonlyRecord } from '@komore/typescript';

import { type CliPathParameterDefinition } from './cli-path-parameter-definition';

/**
 * Command-line interface path parameter definitions from command-line interface route path
 *
 * @template Path Path
 */
export type CliPathParameterDefinitionsFromCliRoutePath<Path extends string> = Path extends `${string}:${string}`
  ? Expand<CliPathParameterDefinitionsFromCliRoutePathRecurse<Path>>
  : {};

type CliPathParameterDefinitionsFromCliRoutePathRecurse<Path extends string> =
  Path extends `${infer ParameterName} ${infer Rest}`
    ? CliRoutePathParameterToCliParameterDefinitionRecord<ParameterName> &
        CliPathParameterDefinitionsFromCliRoutePathRecurse<Rest>
    : Path extends `${infer ParameterName}`
      ? CliRoutePathParameterToCliParameterDefinitionRecord<ParameterName>
      : {};

type CliRoutePathParameterToCliParameterDefinitionRecord<ParameterName extends string> =
  ParameterName extends `:${infer PropertyKey}`
    ? ReadonlyRecord<PropertyKey, CliPathParameterDefinition<unknown, boolean>>
    : {};
